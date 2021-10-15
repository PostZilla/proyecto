from flask_sqlalchemy import SQLAlchemy
import random

db = SQLAlchemy()
user_following=db.Table(
    'user_following',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'))
)

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
    like = db.relationship("Like", foreign_keys="Like.user_id",backref="user", lazy="dynamic")
    follow = db.relationship('User', secondary=user_following, 
                               primaryjoin=(user_following.c.follower_id == id), 
                               secondaryjoin=(user_following.c.followed_id == id), 
                               backref=db.backref('user_following', lazy='dynamic'), 
                               lazy='dynamic')
    
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
    
    
    def create(name, last_name, username, email, password, country, profile_image_url):
        user = User(name=name, last_name=last_name, username=username, email=email, password=password, country=country, profile_image_url=profile_image_url)
        db.session.add(user)
        db.session.commit()
    
    def get_user(id):
        user = User.query.filter_by(id=id).first()
        return User.serialize(user)


    
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

    def addFollow(self,user):
        if not self.is_following(user):
            self.follow.append(user)
            return self

    def unfollow(self, user):
        if self.is_following(user):
            self.follow.remove(user)
            return self

    def is_following(self, user):
        return self.follow.filter(user_following.c.followed_id==user.id).count()>0

    def getFollows(id):
        user= User.query.get(id)
        follows= list(map(lambda follow : follow.serialize(),user.follow))
        return follows
    
    def like_post(self,post):
        if not self.has_liked_post(post):
            like= Like(user_id=self.id,post_id=post.id)
            db.session.add(like)

    def unlike_post(self,post):
        if self.has_liked_post(post):
            Like.query.filter_by(user_id=self.id,post_id=post.id).delete()

    def has_liked_post(self,post):
        return Like.query.filter(Like.user_id==self.id,Like.post_id==post.id).count()>0


class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)
    img = db.Column(db.String(255), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="post")
    likes=db.relationship("Like",backref="post",lazy="dynamic")


    def serialize(self):
        return {
            "id": self.id,
            "user": User.serialize(self.user),
            "text": self.text,
            "img": self.img,
            "likes":self.likes.count()
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
        posts = Post.query.filter_by(user_id=user_id).all()
        posts = list(map(lambda post: post.serialize(), posts))
        return posts

    def delete_post(id):
        post = Post.query.get(id)
        db.session.delete(post)
        db.session.commit()
        return {"message": "Post borrado"}


    def getLikes(id):
        post = Post.query.get(id)
        likes = list(map(lambda follow : follow.serialize(), post.likes))
        return likes

    


class Like(db.Model):
    __tablename__ = 'like'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": User.serialize(self.user),
            "post_id": Post.serialize(self.post)
        }