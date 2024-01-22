// ユーティリティ関数の読み込み
const utils = new Utils();
const methodMsg = utils.getMethod();
const funcMsg = getFunction();

// Pタグを作る
const p1 = document.createElement('p');
p1.innerText = methodMsg;
const p2 = document.createElement('p');
p2.innerText = funcMsg;

// PタグをWebページに挿入する
document.body.appendChild(p1);
document.body.appendChild(p2);
