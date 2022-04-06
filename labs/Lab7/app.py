from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class BlogObj(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    title = db.Column(db.String(30), nullable=False)
    content = db.Column(db.String(150), nullable=False)
    author = db.Column(db.String(20), nullable=False)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        blogTitle = request.form['blogTitle']
        blogContent = request.form['blogContent']
        blogAuthor = request.form['blogAuthor']
        addBlogContent = BlogObj(
            title=blogTitle, content=blogContent, author=blogAuthor)
        try:
            db.session.add(addBlogContent)
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue adding your task'
    else:
        blogsData = BlogObj.query.order_by(BlogObj.date_created).all()
        return render_template("index.html", blogsData=blogsData)


@app.route("/new-blog", methods=["GET", "POST"])
def newBlog():
    return render_template("newBlog.html")


@app.route('/blog/<int:id>')
def blogId(id):
    # blogToShow = BlogObj.query.get_or_404(id)
    blogId = BlogObj.query.get_or_404(id)
    return render_template("blogPage.html", blogId=blogId)


@app.route('/delete/<int:id>')
def delete(id):
    blogToDelete = BlogObj.query.get_or_404(id)
    try:
        db.session.delete(blogToDelete)
        db.session.commit()
        return redirect("/")
    except:
        return 'There was a problem deleting that task'


if __name__ == "__main__":
    app.run(debug=True)
