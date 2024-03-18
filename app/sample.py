from flask_login import LoginManager
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/templates', methods=['GET'])
def top():
    html = render_template('top.html')
    return html

@app.route('/top', methods=['GET'])
def back_top():
    html = render_template('top.html')
    return html

@app.route('/login', methods=['GET', 'POST'])
def login():
    html = render_template('login.html')
    return html

@app.route('/user_regist', methods=['GET', 'POST'])
def user_regist():
    html = render_template('user_regist.html')
    return html


if __name__ == "__main__":
    app.run(port=50000, debug=True)
