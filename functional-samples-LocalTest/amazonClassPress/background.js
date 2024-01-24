chrome.runtime.onMessage.addListener((request, sender) => {
  console.log(request); // hello メッセージ
  console.log(sender); // 送られてきたタブに関する情報(タブIDや開いているURL/Titleなど)
});
