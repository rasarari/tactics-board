var blues = document.getElementsByClassName("drag-and-drop");

for(var i = 0; i < blues.length; i++){
  blues[i].style.top = 120 + "px";
  blues[i].style.left = 20 + 40*i + "px";
}

var x;
var y;

for(var i = 0; i < blues.length; i++){
  blues[i].addEventListener("mousedown", mdown, false);
}

function mdown (event) {
  //クラス名に.dragを追加
  this.classList.add("drag");

  x = event.pageX - this.offsetLeft;
  y = event.pageY - this.offsetTop;

  document.body.addEventListener("mousemove", mmove, false);
}

function mmove (event) {
  var drag = document.getElementsByClassName("drag")[0];

  //フリックしたときに画面を動かさないようにデフォルト動作を抑制
  event.preventDefault();

  //マウスが動いた場所に要素を動かす
  drag.style.top = event.pageY - drag.offsetHeight/2 + "px";
  drag.style.left = event.pageX - drag.offsetWidth/2 + "px";

  //マウスボタンが離されたとき、またはカーソルが外れたとき発火
  drag.addEventListener("mouseup", mup, false);
}

function mup(e) {
  var drag = document.getElementsByClassName("drag")[0];

  //ムーブベントハンドラの消去
  document.body.removeEventListener("mousemove", mmove, false);
  drag.removeEventListener("mouseup", mup, false);

  //クラス名 .drag も消す
  drag.classList.remove("drag");
}

blues.ondragstart = function() {
  return false;
};