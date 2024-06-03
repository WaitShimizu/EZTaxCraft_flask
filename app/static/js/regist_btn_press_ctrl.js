"use strict";
// --- ユーザー登録ボタン押下設定 --- //

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

    // メールアドレス、パスワード、再入力パスワードが入力され、
    // パスワードと再入力パスワードが一致し、
    // かつチェックボックスにチェックが入っている場合にボタンを有効化
    const isValid = email !== '' && password !== '' && rePassword !== '' && (password === rePassword) && agreeChecked;
    submitBtn.disabled = !isValid;
  }

  // 各入力要素にイベントリスナーを追加
  document.getElementById('email').addEventListener('input', updateState);
  document.getElementById('password').addEventListener('input', updateState);
  document.getElementById('re-password').addEventListener('input', updateState);
  document.getElementById('agreement').addEventListener('change', updateState);

});
// // チェックボックスをクリックした時
// agreeCheckbox.addEventListener("click", () => {
//   // チェックされている場合
//   if (agreeCheckbox.checked === true) {
//     submitBtn.disabled = false; // disabledを外す
//     if () {

//     }
//   }
//   // チェックされていない場合
//   else {
//     submitBtn.disabled = true; // disabledを付与
//   }
// });

