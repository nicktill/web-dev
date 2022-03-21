from pickle import TRUE
from flask import Flask, request, abort, url_for, redirect

app = Flask(__name__)

aboutUsPage = """
<!DOCTYPE html>
<html>
	<h1> About Us </h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <p>
    <br></br>
    <a href="http://127.0.0.1:5000">Back to Home Page</a>
</html>
"""

contactUsPage = """
<!DOCTYPE html>
<html>
	<head>
		<title>Basic form</title>
	</head>
	<body>
		<form action="/notificationSent" method="post">
			Customer name:  <input type="text" name="customerName" />
			<br />
			Email:  <input type="text" name="customerEmail" />
			<br />
			<input type="submit" value="submit" />
		</form>
	</body>
    <a href="http://127.0.0.1:5000">Back to Home Page</a>
</html>
"""

landingPage = """
<!DOCTYPE html>
<html>
	<h1> Home Page </h1>
    <h2> Welcome to Nick Tillmanns Flask Page </h2>
    <ul> 
        <li> Grade: Junior </li>
        <li> Age: 21 </li>
        <li> Pitt ID: nit36 </li>
    </ul>
    <body>
        <a href=http://127.0.0.1:5000/contact>Contact Us</a>
        <br></br>
        <a href="http://127.0.0.1:5000/about">About Us</a>
    </body>
</html>
"""

showUser = """
<!DOCTYPE html>
<html>
	<h1> Thanks, {} </h1>
    <h1> Your request has been submitted </h1>
    <h1> We will contact you via {} </h1>    
    <a href="http://127.0.0.1:5000">Back to Home Page</a>
</html>
"""

errorPage = """
<!DOCTYPE html>
<html>
	<h1> Error Page </h1>
    <h1> Your request has failed, you are trying to reach the sent request manually (GET) </h1>
    <a href="http://127.0.0.1:5000/contact" Try Again</a>
    
</html>
"""

@app.route("/", methods=["GET", "POST"])
def default():
    return landingPage

@app.route("/notificationSent", methods=["GET", "POST"])
def notificationSent():
    if request.method == 'POST':
        return showUser.format(request.form["customerName"], request.form["customerEmail"])
    else:
        return errorPage
    
@app.route("/about", methods=["GET", "POST"])
def about():
    return aboutUsPage

@app.route("/contact", methods=["GET", "POST"])
def contact():
    return contactUsPage


if __name__ == "__main__":
	app.run(debug=True)



