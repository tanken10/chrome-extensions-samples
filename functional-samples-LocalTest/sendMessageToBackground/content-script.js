// ここでは文字列('hello')でメッセージを送ってますが、オブジェクトでもよい
chrome.runtime.sendMessage('hello', (receive) => {
    // 送り返されるものがなければ、このコールバックは必要ない
    console.log(receive); // sendResponse で送り返された {} 空のObject
});