from flask_login import LoginManager
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # POSTリクエストの場合、認証情報を取得して認証を行う
        email = request.form.get('email')
        password = request.form.get('password')
        # ここでユーザーの認証を行う処理を追加する
        # ログインに成功したら適切なページにリダイレクトするなどの処理を行う
        return f'Login Successful! email:{email} password:{password}'

    html = render_template('top.html')
    return html

if __name__ == "__main__":
    app.run(port=50000, debug=True)
