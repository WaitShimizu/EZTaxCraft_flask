"use strict";
// --- パスワード入力表示切替設定 --- //

//  id="view"または"re-view"クリック時の処理を設定
function onClickPassView(viewIdName, inputTypeName) {
    //  id="view"または"re-view"を取得
    let viewicon = document.getElementById(viewIdName);
    //  id="password"または"re-password"を取得
    let inputtype = document.getElementById(inputTypeName);

    //  passwordからtextへ
    if(inputtype.type === 'password'){
        inputtype.type = 'text';
        viewicon.className = 'far fa-eye-slash';
        console.log("Clicked! 1");

    //  textからpasswordへ
    } else {
        inputtype.type = 'password';
        viewicon.className = 'far fa-eye';
        console.log("Clicked! 2");
    }
};