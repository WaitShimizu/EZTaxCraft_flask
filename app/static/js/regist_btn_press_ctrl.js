"use strict";
// --- ユーザー登録ボタン押下設定 --- //

// HTMLのロードが完了した後にJavaScriptのコードが実行される
document.addEventListener('DOMContentLoaded', () => {
  function updateState() {
    // メールアドレスを取得
    const email = document.getElementById("email").value.trim();
    // パスワードを取得
    const password = document.getElementById("password").value.trim();
    // 再入力パスワードを取得
    const rePassword = document.getElementById("re-password").value.trim();
    // 「同意する」のチェックボックスを取得
    const agreeChecked = document.getElementById("agreement").checked;
    // 送信ボタンを取得
    const submitBtn = document.getElementById("btn-regist");

    // disabled判定用定数
    let isValid = true;

    // チェックボックスにチェックが入ってるか確認
    if (agreeChecked === false) {
      // チェックが入っていない場合何もしない
      isValid = false;
    }

    // メールアドレス、パスワード、再パスワードが入力されているか確認
    if ((email === '') || (password === '') || (rePassword === '')) {
      // メールアドレス、パスワード、再パスワードが空の場合は何もしない
      isValid = false;
    }

    // パスワードと再パスワードが一致しているか確認
    if (password !== rePassword) {
      // パスワードと再パスワードが一致してなければ何もしない
      isValid = false;
    }

    // ボタンを有効化
    submitBtn.disabled = !isValid;
  }

  // 各入力要素にイベントリスナーを追加
  document.getElementById('email').addEventListener('input', updateState);
  document.getElementById('password').addEventListener('input', updateState);
  document.getElementById('re-password').addEventListener('input', updateState);
  document.getElementById('agreement').addEventListener('change', updateState);

});