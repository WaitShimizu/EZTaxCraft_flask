"use strict";
// --- 帳簿一覧表示設定 --- //

const list = [
                '仕入帳','総勘定元帳','現金出納帳','当座預金出納帳','小口現金出納帳','売上帳',
                '受取手形記入帳','支払手形記入帳','商品有高帳','売掛金元帳','買掛金元帳','固定資産台帳'
            ];

// 各リストアイテムに対応するURLと定義
const links = [
                'https://www.google.co.jp/',
                'https://www.yahoo.co.jp/',
                'https://www.youtube.com/',
                'https://xn--u9jv84l7ea468b.com/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/',
                'https://www.google.co.jp/'
            ];

document.addEventListener("DOMContentLoaded", function() {
    const accountingList = document.getElementById('accounting');

    list.forEach((item, index) => {
        // 新しい<li>（リストアイテム）要素を作成。
        const listItem = document.createElement('li');
        // 新しい<a>（リンク）要素を作成。
        const link = document.createElement('a');

        // リンクのテキストを現在のリストアイテムの名前に設定。
        link.textContent = item;
        // リンクのhref属性を現在のインデックスに対応するリンクURLに設定。
        link.href = links[index];
        // リンク要素をリストアイテムの子要素として追加。
        listItem.appendChild(link);
        // リストアイテムを<ul>要素に追加。
        accountingList.appendChild(listItem);
    });
});