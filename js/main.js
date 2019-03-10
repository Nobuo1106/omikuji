// エラーチェック
'use strict';

{
// 定数btnにhtmlIdのbtnを代入する。
  const btn = document.getElementById('btn');
//定数nにランダムな乱数0-1を代入する。
    const n = Math.random();
// もし0.05(0.05/1 = 5%)より小さければ大吉
    if (n < 0.05) {
      btn.textContent = '大吉';
// もし0.2((0.2-0.05)/1 = 15%)より小さければ小吉
    } else if (n < 0.2) {
      btn.textContent = '中吉';
// それ以外は凶
    } else {
      btn.textContent = '凶';
    }
  });
// 定数btnのマウスがクリックダウンされた時のイベント処理
  btn.addEventListener('mousedown', () =>{
    btn.classList.add('pressed');
  });
// 定数btnのマウスがクリックアップされた時のイベント処理
  btn.addEventListener('mouseup', () =>{
// 定数btnからpressedクラスを取り除く
    btn.classList.remove('pressed');
  });
}
