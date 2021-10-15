"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import cloudinary
import cloudinary.uploader

api = Blueprint('api', __name__)


@api.route('/register', methods=['POST'])
def create():
    image = request.files['File']

    if image is None:
        return jsonify({"msg": "Error to get image"}), 400

    name = request.form["name"]
    last_name = request.form["last_name"]
    username = request.form["username"]
    email = request.form["email"]
    password = request.form["password"]
    country = request.form["country"]
    upload_result= cloudinary.uploader.upload(image)
    profile_image_url= upload_result["secure_url"]

    User.create(name,last_name, username,email,password, country, profile_image_url)

    return jsonify({"msg":"Usuario creado! Ahora, inicia sesión."}), 200



@api.route('/login', methods=['POST'])
def sign_in():
    body = request.get_json()
    if body is None:
        return jsonify({"error": "Body is empty or null"}), 400

    email = body['email']
    password = body['password']

    user = User.query.filter_by(email=email, password=password).first()
    if User is None:
        return jsonify({"msg": "Email or password is wrong"}), 401
    
    token = create_access_token(identity=user.id)
    print(token)
    return jsonify({"token": token}), 200


@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():

    user_id= get_jwt_identity()
    user= User.get_user(user_id)
    return jsonify(user),200



@api.route('/search', methods=["GET"])
@jwt_required()
def get_all_user():
    
    usernames = User.get_all_user()

    return jsonify({"data": usernames})

@api.route('/user', methods=['DELETE'])
@jwt_required()
def delete_user(id):
    user = User.delete_user(id)
    return jsonify(user),200

@api.route('/post', methods=['POST'])
@jwt_required()
def create_post():
    filesLength = len(request.files)
    img = ''
    image = ''
    if filesLength == 0:
        img = ''
    else:
        image = request.files['File']
        if image is None:
            img = ''
        else:
            upload_result = cloudinary.uploader.upload(image)
            img = upload_result["secure_url"]

    user_id = get_jwt_identity()
    text = request.form["text"]
    Post.create_post(user_id, text, img)
    
    return {"message": "post created"}, 200

@api.route('/posts', methods=['GET'])
@jwt_required()
def get_all_post():
    posts = Post.get_all_post()

    return jsonify(posts), 200

@api.route('/posts/<int:user_id>', methods=['GET'])
@jwt_required()
def get_post(user_id):
    print(user_id)
    post = Post.get_post(user_id)
    print(post)
    return jsonify(post), 200

@api.route('/post/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_post(id):
    post = Post.delete_post(id)
    return jsonify(post),200

@api.route('/follow', methods=['POST'])
@jwt_required()
def new_follow():
    body = request.get_json()
    
    friend_id = body["friend_id"]
    friend= User.query.get(friend_id)

    user_id = get_jwt_identity()
    user= User.query.get(user_id)
    follow= user.addFollow(friend)

    db.session.add(follow)
    db.session.commit()
    return {"message": "seguidor agregado"}, 200

@api.route('/follows', methods=['GET'])
@jwt_required()
def get_all_follows():
    user_id = get_jwt_identity()

    follower = User.getFollows(user_id)
    return jsonify(follower)

@api.route('/follower/<int:id>', methods=['GET'])
@jwt_required()
def is_following(id):
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    follower = User.query.get(id)

    following = user.is_following(follower)
    print(following)

    return jsonify(following)


@api.route('/unfollow/<int:id>', methods=['GET'])
@jwt_required()
def unfollow(id):

    user = get_jwt_identity()
    friend= User.query.get(id)
    user_info= User.query.get(user)

    unfollow= user_info.unfollow(friend)

    db.session.add(unfollow)
    db.session.commit()
    return{"message": "seguidor eliminado"}, 200

@api.route('/like/<int:post_id>/<action>', methods=['GET'])
@jwt_required()
def create_like(post_id,action):
    user = get_jwt_identity()
    user_info= User.query.get(user)
    post=Post.query.filter_by(id=post_id).first()
    if action=="like":
        user_info.like_post(post)
        db.session.commit()
    if action=="unlike":
        user_info.unlike_post(post)
        db.session.commit()

    return {"message": action}, 200