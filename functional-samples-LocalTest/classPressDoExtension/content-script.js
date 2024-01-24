
var $sampleOutput = document.getElementById( "sampleOutput" );
var $sampleAElements = document.getElementsByClassName( "sampleA" );
var $sampleBElements = document.getElementsByClassName( "sampleB" );

// すべてのクラスが "clickable-span" である span 要素を取得
const clickableSpansSampleA = document.querySelectorAll('.sampleA');

// 各 span 要素にクリックイベントリスナーを追加
clickableSpansSampleA.forEach(span => {
    span.addEventListener('click', function () {
        // クリックされたときに実行するコードをここに記述
        // alert('+クリックされました！');
        // 他の処理を追加できます
        // 加算処理入れてみたり
        for( var $i = 0; $i < $sampleAElements.length; $i++ ) {
            $sampleAElements[$i].onclick = function () {
                $sampleOutput.innerHTML = parseInt( $sampleOutput.innerHTML ) + 1;
            }
        }
        // backgroundスクリプトへメッセージ送信
        chrome.runtime.sendMessage('+クリック', (receive) => {
            // 送り返されるものがなければ、このコールバックは必要ない
            console.log(receive); // sendResponse で送り返された {} 空のObject
        });
    });
});


// すべてのクラスが "clickable-span" である span 要素を取得
const clickableSpansSampleB = document.querySelectorAll('.sampleB');

// 各 span 要素にクリックイベントリスナーを追加
clickableSpansSampleB.forEach(span => {
    span.addEventListener('click', function () {
        // クリックされたときに実行するコードをここに記述
        // alert('-クリックされました！');
        // 他の処理を追加できます
        // 減算処理入れてみたり
        for( var $i = 0; $i < $sampleBElements.length; $i++ ) {
            $sampleBElements[$i].onclick = function () {
                $sampleOutput.innerHTML = parseInt( $sampleOutput.innerHTML ) - 1;
            }
        }    
        // backgroundスクリプトへメッセージ送信
        chrome.runtime.sendMessage('-クリック', (receive) => {
            // 送り返されるものがなければ、このコールバックは必要ない
            console.log(receive); // sendResponse で送り返された {} 空のObject
        });
    });
});
