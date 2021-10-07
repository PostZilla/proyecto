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
def get_user(email):

    user = User.get_user(email)
    if user is None:
        return jsonify({"msg":"no user found"})

    return jsonify(user), 200

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
    image = request.files['File']
    
    user_id = get_jwt_identity()

    text = request.form["text"]
    upload_result= cloudinary.uploader.upload(image)
    img = upload_result["secure_url"]

    Post.create_post(user_id, text, img)
    
    return {"message": "post created"}, 200

@api.route('/posts', methods=['GET'])
@jwt_required()
def get_all_post():
    posts = Post.get_all_post()

    return jsonify(posts), 200
@api.route('/follow', methods=['POST'])
@jwt_required()
def new_follow():
    body = request.get_json()
    if body is None:
        return {"error": "The body is null or undefined"}, 400
    friend_id = body["friend_id"]
    friend= User.query.get(friend_id)

    user_id = get_jwt_identity()
    user= User.query.get(user_id)
    follow= user.addFollow(friend)

    print(follow)
    db.session.add(follow)
    db.session.commit()
    return {"message": "seguidor agregado"}, 200

@api.route('/follows', methods=['GET'])
@jwt_required()
def get_all_follows():
    user_id = get_jwt_identity()

    follower = User.getFollows(user_id)
    print(follower)
    return jsonify(follower)

@api.route('/follower/<int:id>', methods=['GET'])
@jwt_required()
def is_following(id):
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    follower = User.query.get(id)

    following = user.is_following(follower)
    return jsonify({following:following})


@api.route('/follows/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_follow(id):
    return jsonify(follow), 200
@api.route('/like', methods=['POST'])
@jwt_required()
def new_like():
    body = request.get_json()
    if body is None:
        return {"error": "The body is null or undefined"}, 400

    post_id = body['post_id']

    Like.new_like(post_id)
    return {"message": "seguidor agregado"}, 200