// button(#btn)のHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// h2(#text)のHTML要素を取得、定数に代入する
const text = document.getElementById('text');
// ボタンをクリックしたときにh2のテキストを書き換える
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
  console.log(text);
})
