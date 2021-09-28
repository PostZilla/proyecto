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
    body = request.get_json()
    if body is None:
        return jsonify({"msg": "Body is empty or null"})

    name = body["name"]
    last_name = body["last_name"]
    username = body["username"]
    email = body["email"]
    password = body["password"]
    country = body["country"]
    profile_image_url= body["profile_image_url"]

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

@api.route('/profile/image/', methods=["POST"])
def upload_image():
    
    image = request.files['File']

    if image is None:
        return jsonify({"msg": "Error to get image"}), 400
    
    upload_result = cloudinary.uploader.upload(image)

    user = User.query.get(1)

    User.profile_image_url = upload_result['secure_url']

    db.session.commit()

    return jsonify({"msg": "image upload fine"}), 200

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user(email):

    user = User.get_user(email)
    if user is None:
        return jsonify({"msg":"no user found"})

    return jsonify(user), 200

@api.route('/usernames', methods=["GET"])
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
    body = request.get_json()
    print(body)
    if body is None:
        return {"error": "The body is null or undefined"}, 400

    user_id = get_jwt_identity()

    text = body["text"]
    img = " "

    Post.create_post(user_id=user_id, text=text, img=img)
    
    return {"message": "post created"}, 200

@api.route('/post', methods=['GET'])
@jwt_required()
def get_all_post():
    posts = Post.get_all_post()

    return jsonify(posts), 200

