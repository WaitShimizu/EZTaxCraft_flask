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

@app.route('/mypage', methods=['GET', 'POST'])
def mypage():
    email = request.form["email"]
    password = request.form["password"]
    html = f"""
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>応答確認</title>
    <script src="./static/js/sample.js"></script>
  </head>

  <body>
    <p>入力されたユーザーID：{email}</p>
    <p>入力されたパスワード：{password}</p>
  </body>
</html>
    """
    return html

@app.route('/user-info-regist', methods=['GET', 'POST'])
def user_info_regist():
    html = render_template('user_info_regist.html')
    return html

if __name__ == "__main__":
    app.run(port=50000, debug=True)
