// 監視対象の要素を選択
var targetNode = document.body;

// 監視の設定
var config = { childList: true, subtree: true };

// コールバック関数を定義
var callback = function(mutationsList, observer) {
    // すべての変更を確認
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            // 'qs-copy' クラスを持つ span 要素を検索
            var copyButtons = document.querySelectorAll('.qs-copy');
            copyButtons.forEach(function(button) {
                // イベントリスナーがまだ追加されていないことを確認
                if (!button.hasAttribute('data-listener-added')) {
                    button.addEventListener('click', function() {
                        var parentDiv = button.closest('.qs-asin');
                        if (parentDiv) {
                            var asin = parentDiv.querySelector('.qs-value').textContent;
                            alert("ASINコード：" + asin);
                        }
                    });
                    // イベントリスナー追加済みのマークを設定
                    button.setAttribute('data-listener-added', 'true');
                }
            });
        }
    }
};

// MutationObserverのインスタンスを作成
var observer = new MutationObserver(callback);

// 監視を開始
observer.observe(targetNode, config);
