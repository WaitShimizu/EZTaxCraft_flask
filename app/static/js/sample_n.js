"use strict";

$(function() {

    // フォームが送信されたときに値を出力するサンプル
    $("form").on("submit", function(e) {
        e.preventDefault();

        const keyvalues = $(this).serialize();
        const inputvalues = keyvalues.split("&").map((keyvalue) => {
            return $("<li>").text(decodeURIComponent(keyvalue));
        });

        $(".result")
            .children().remove().end()
            .append(inputvalues);
    });
});