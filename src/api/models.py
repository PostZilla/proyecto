from flask_sqlalchemy import SQLAlchemy
import random

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),unique=False, nullable = False)
    last_name = db.Column(db.String(120),unique=False, nullable = False)
    username = db.Column(db.String(120),unique=False, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    country = db.Column(db.String(120),unique=False, nullable = False)
    profile_image_url = db.Column(db.String(255), unique=False, nullable=True)
    post = db.relationship("Post", back_populates="user")
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "username": self.username,
            "last_name": self.last_name,
            "country": self.country,
            "profile_image_url": self.profile_image_url
            # do not serialize the password, its a security breach
        }
    #inteto de push Bryan
    
    def create(name, last_name, username, email, password, country, profile_image_url):
        user = User(name=name, last_name=last_name, username=username, email=email, password=password, country=country, profile_image_url=profile_image_url)
        db.session.add(user)
        db.session.commit()
    
    def get_user(username, email, password):
        user = User.query.filter_by(username=username, email=email, password=password).first()
        return user
    
    def get_all_user():
        usernames = User.query.all()
        usernames = list(map(lambda user: user.serialize(), usernames))
        return usernames
    
    def delete_user(id):
        user = User.query.get(id)
        db.session.delete(user)
        db.session.commit()
    

    def randomPassword(email):
        user = User.query.filter_by(email=email).first()
        password = ''.join((random.choice('abcdxyzpqr') for i in range(5)))
        user.password = password
        db.session.commit()

        return password

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)
    img = db.Column(db.String(255), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="post")

    def serialize(self):
        return {
            "id": self.id,
            "user": User.serialize(self.user),
            "text": self.text,
            "img": self.img
        }
    
    def create_post(user_id, text, img):
        post = Post(user_id=user_id, text=text, img=img)
        db.session.add(post)
        db.session.commit()
    
    def get_all_post():
        posts = Post.query.all()
        posts = list(map(lambda post: post.serialize(), posts))
        return posts

    def get_post(user_id):
        post = Post.query.filter_by(user_id=user_id).first()
        return post

    def delete_post(post_id):
        post = Post.query.get(post_id)
        db.session.delete(post)
        db.session.commit()
    
