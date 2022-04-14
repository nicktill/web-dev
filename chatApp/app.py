from flask import Flask, request, abort, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class userChatter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False)
    password = db.Column(db.String(150), nullable=False)
    retypepassword = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)


@app.route("/")
def default():
    return render_template("index.html")


# @app.route("/login/", methods=["GET", "POST"])
# def login_controller():


@app.route("/register/", methods=["GET", "POST"])
def register_controller():
    return render_template("register.html")


# @app.route("/profile/<username>")
# def profile(username=None):


# @app.route("/logout/")
# def unlogger():


# @app.route("/new_message/", methods=["POST"])
# def new_message():


# @app.route("/messages/")
# def messages():

if __name__ == "__main__":
    app.run(debug=True)
