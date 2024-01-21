# コンテンツスクリプトを試してみる
参考：https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts?hl=ja
　　ベースとしてここが基本
参考：https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns?hl=ja
    マッチさせるときに以下参考
    "file:///"
    拡張機能をローカル ファイルで実行できるようにします。このパターンでは、ユーザーが手動でアクセス権を付与する必要があります。この場合、スラッシュが 2 つではなく 3 つ必要です。

## 静的サイトでの動作確認済み
やり方
・拡張機能をChomeに読み込ませる
・ChomeでwebPage.htmlを開く
・ボタンを押す