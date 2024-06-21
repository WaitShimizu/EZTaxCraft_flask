"use strict";

$(document).ready(function() {
    function selectTab(tabId) {

        // すべてのタブコンテンツを非表示
        $('.area').hide().removeClass('active');
        // 指定されたタブコンテンツを表示
        $('#' + tabId).show().addClass('active');

        // ボタン表示制御
        if (tabId === 'registered') {
            $('#btn-login').show();
            $('#btn-user-regist').hide();

        } else if (tabId === 'unregistered') {
            $('#btn-login').hide();
            $('#btn-user-regist').show();

        }  else if (tabId === 'usage') {
            $('#btn-login').show();
            $('#btn-user-regist').show();

        } else {
            $('#btn-login').hide();
            $('#btn-user-regist').hide();
        }
    }

    // 初期表示の制御
    const hash = window.location.hash.substring(1);
    if (hash) {
        selectTab(hash);

    } else {
        selectTab('registered');
    }

    // タブメニューのクリックイベント
    $('.tab-menu a').on('click', function(e) {
        e.preventDefault();
        const tabId = $(this).attr('href').substring(1);
        window.location.hash = tabId;
        selectTab(tabId);
    });

    // ハッシュが更新されたときの処理
    $(window).on('hashchange', function() {
        const tabId = window.location.hash.substring(1);
        selectTab(tabId);
    });
});