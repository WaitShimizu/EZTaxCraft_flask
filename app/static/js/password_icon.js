"use strict";

//  id="view"クリック時の処理を設定
function onClickPassView() {
    //  id="view"を取得
    let viewicon = document.getElementById('view');
    //  id="password"を取得
    let inputtype = document.getElementById('password');

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


// チェックボックスイベント処理
let element = document.getElementById('agreement');
element.addEventListener('change', function(click_element){

    //ここにイベントの内容を記述
    if (element.checked == true){
        //利用規約に同意していた場合に処理する内容を記述する

    } else {
        //利用規約に同意しない場合に処理する内容を記述する
        // ※何も処理しない(ボタンを非活性に設定する必要を考慮する)
    }
});