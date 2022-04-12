from flask import Flask, request, abort, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class userChatter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    username = db.Column(db.String(30), nullable=False)
    content = db.Column(db.String(150), nullable=False)


@app.route("/")
def default():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
