"use strict";
// --- ユーザー登録ボタン制御 --- //

document.addEventListener('DOMContentLoaded', () => {

  function validatePassword(password) {
    // 半角英数字8文字～20文字以内(空文字NG)の正規表現チェック
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    return regex.test(password);
  }

  // ツールチップを表示する関数
  function showTooltip(passElement, msg, tooltipId, xPos) {
    const tooltipElement = document.getElementById(tooltipId);
    const rect = passElement.getBoundingClientRect();
    tooltipElement.textContent = msg;
    tooltipElement.style.display = "block";
    tooltipElement.style.left = `${rect.left + window.scrollX + xPos}px`;
    tooltipElement.style.top = `${rect.bottom + window.scrollY + -65}px`;
  }

  // バリデーションチェックを通過した場合ツールチップを非表示にする関数
  function hideTooltip(tooltipId) {
    const tooltip = document.getElementById(tooltipId);
    tooltip.style.display = "none";
  }

  function updateState() {
    // メールアドレスを取得
    const email = document.getElementById("email").value.trim();
    // パスワードを取得
    const password = document.getElementById("password");
    // 再パスワードを取得
    const rePassword = document.getElementById("re-password");
    // 「同意する」のチェックボックスを取得
    const agreeChecked = document.getElementById("agreement").checked;
    // 送信ボタンを取得
    const submitBtn = document.getElementById("btn-regist");

    const passwordVal = password.value.trim();
    const rePasswordVal = rePassword.value.trim();

    // disabled判定用定数(true:ボタンの無効化, false:ボタンの有効化)
    let isDisable = false;

    // チェックボックスにチェックが入ってるか確認
    if (!agreeChecked) {
      // ボタンを無効化
      isDisable = true;
    }

    // メールアドレス、パスワード、再パスワードが入力されているか確認
    if (email === '' || passwordVal === '' || rePasswordVal === '') {
      // ボタンを無効化
      isDisable = true;
    }

    // パスワードの形式を確認
    if (!validatePassword(passwordVal)) {
      showTooltip(
        password,
        "※8文字以上20文字以内の半角英数字で入力してください",
        "error-pass-msg",
        110);
        // ボタンを無効化
        isDisable = true;

    } else {
      // エラーメッセージをクリア
      hideTooltip("error-pass-msg");
    }

    if (passwordVal !== rePasswordVal) {
      showTooltip(
        rePassword,
        "※パスワードが一致しません",
        "error-repass-msg",
        170
      );
      // ボタンを無効化
      isDisable = true;

    } else {
      // エラーメッセージをクリア
      hideTooltip("error-repass-msg");
    }

    // ボタンを有効化
    submitBtn.disabled = isDisable;
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