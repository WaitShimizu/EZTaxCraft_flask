from flask import Flask
from flask_login import LoginManager
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/login')
def login():
    # html = render_template('sample_n.html')
    html = render_template('study.html')
    return html

if __name__ == "__main__":
    app.run(port=50000, debug=True)
