"use strict";
// --- ユーザー登録ボタン制御 --- //

document.addEventListener('DOMContentLoaded', () => {

  function validatePassword(password) {
    // 半角英数字8文字～20文字以内(空文字NG)の正規表現チェック
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    return regex.test(password);
  }

  function showTooltipMeil(element, message) {
    const tooltip = document.getElementById("error-meil-msg");
    const rect = element.getBoundingClientRect();
    tooltip.textContent = message;
    tooltip.style.display = "block";
    tooltip.style.left = `${rect.left + window.scrollX + 110}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + -65}px`;
  }

  // ツールチップを表示する関数
  function showTooltip(element, message) {
    const tooltip = document.getElementById("error-msg");
    const rect = element.getBoundingClientRect();
    tooltip.textContent = message;
    tooltip.style.display = "block";
    tooltip.style.left = `${rect.left + window.scrollX + 170}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + -65}px`;
  }

  function hidePassTooltip() {
    const tooltip = document.getElementById("error-meil-msg");
    tooltip.style.display = "none";
  }

  function hideRePassTooltip() {
    const tooltip = document.getElementById("error-msg");
    tooltip.style.display = "none";
  }

  function updateState() {
    // メールアドレスを取得
    const email = document.getElementById("email").value.trim();
    // パスワードを取得
    const password = document.getElementById("password").value.trim();
    // 再パスワードを取得
    const rePassword = document.getElementById("re-password").value.trim();
    // 「同意する」のチェックボックスを取得
    const agreeChecked = document.getElementById("agreement").checked;
    // 送信ボタンを取得
    const submitBtn = document.getElementById("btn-regist");

    // disabled判定用定数
    let isValid = true;

    // チェックボックスにチェックが入ってるか確認
    if (!agreeChecked) {
      isValid = false;
    }

    // メールアドレス、パスワード、再パスワードが入力されているか確認
    if (email === '' || password === '' || rePassword === '') {
      isValid = false;
    }

    // パスワードの形式を確認
    if (!validatePassword(password)) {
      showTooltipMeil(document.getElementById("password"), "※8文字以上20文字以内の半角英数字で入力してください");
      isValid = false;

    } else {
      // エラーメッセージをクリア
      hidePassTooltip();
    }

    if (password !== rePassword) {
      showTooltip(document.getElementById("re-password"), "※パスワードが一致しません");
      isValid = false;
    } else {
      // エラーメッセージをクリア
      hideRePassTooltip();
    }

    // ボタンを有効化
    submitBtn.disabled = !isValid;
  }

  // フォーム内の各要素のフォーカスイベントを監視して、パスワードフィールドがフォーカスされているかどうかを確認する
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
      if (input.id === 'password') {
        updateState();
      }
    });
  });

  // 各入力要素にイベントリスナーを追加
  document.getElementById('email').addEventListener('input', updateState);
  document.getElementById('password').addEventListener('input', updateState);
  document.getElementById('re-password').addEventListener('input', updateState);
  document.getElementById('agreement').addEventListener('change', updateState);
});