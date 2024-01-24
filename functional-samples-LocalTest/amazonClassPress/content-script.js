// すべてのクラスが "clickable-span" である span 要素を取得
var clickableSpansData = document.querySelectorAll('.a-color-base.a-text-bold');

// 各 span 要素にクリックイベントリスナーを追加
clickableSpansData.forEach(span => {
    span.addEventListener('click', function () {
        // クリックされたときに実行するコードをここに記述
        alert('日付がクリックされました！');
        // 他の処理を追加できます
        // backgroundスクリプトへメッセージ送信
        chrome.runtime.sendMessage('日付クリック', (receive) => {
            // 送り返されるものがなければ、このコールバックは必要ない
            console.log(receive); // sendResponse で送り返された {} 空のObject
        });
    });
});


// すべてのクラスが "clickable-span" である span 要素を取得
var clickableSpansPrice = document.querySelectorAll('.a-price-whole');

// 各 span 要素にクリックイベントリスナーを追加
clickableSpansPrice.forEach(span => {
    span.addEventListener('click', function () {
        // クリックされたときに実行するコードをここに記述
        alert('金額がクリックされました！');
        // 他の処理を追加できます
        // backgroundスクリプトへメッセージ送信
        chrome.runtime.sendMessage('金額クリック', (receive) => {
            // 送り返されるものがなければ、このコールバックは必要ない
            console.log(receive); // sendResponse で送り返された {} 空のObject
        });
    });
});

