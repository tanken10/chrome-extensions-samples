// すべてのクラスが "clickable-span" である span 要素を取得
const clickableSpans = document.querySelectorAll('.clickable-span');

// 各 span 要素にクリックイベントリスナーを追加
clickableSpans.forEach(span => {
    span.addEventListener('click', function () {
        // クリックされた要素のテキストを取得
        const spanText = this.textContent;
        
        // テキストをアラートメッセージとして表示
        alert(`クリックされたテキスト: ${spanText}`);
    });
});
