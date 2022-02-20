var elements = document.getElementsByClassName("drag-and-drop");

for(var i = 0; i < elements.length; i++){
  elements[i].style.top = 120 + "px";
  elements[i].style.left = 20 + 40*i + "px";
}

var x;
var y;

for(var i = 0; i < elements.length; i++){
  elements[i].addEventListener("mousedown", mdown, false);
  elements[i].addEventListener("touchstart", mdown, false);
}

function mdown (e) {
  //クラス名に.dragを追加
  this.classList.add("drag");

  if(e.type === "mousedown") {
    var event = e;
  } else {
    var event = e.changedTouches[0];
  }

  x = event.pageX - this.offsetLeft;
  y = event.pageY - this.offsetTop;

  document.body.addEventListener("mousemove", mmove, false);
  document.body.addEventListener("touchmove", mmove, false);
}

function mmove (e) {
  var drag = document.getElementsByClassName("drag")[0];

  //同様にマウスとタッチの差異を吸収
  if(e.type === "mousemove") {
    var event = e;
  } else {
    var event = e.changedTouches[0];
  }

  //フリックしたときに画面を動かさないようにデフォルト動作を抑制
  event.preventDefault();

  //マウスが動いた場所に要素を動かす
  drag.style.top = event.pageY - drag.offsetHeight/2 + "px";
  drag.style.left = event.pageX - drag.offsetWidth/2 + "px";

  //マウスボタンが離されたとき
  drag.addEventListener("mouseup", mup, false);
  drag.addEventListener("touchend", mup, false);
}

function mup(e) {
  var drag = document.getElementsByClassName("drag")[0];

  //ムーブベントハンドラの消去
  document.body.removeEventListener("mousemove", mmove, false);
  drag.removeEventListener("mouseup", mup, false);
  document.body.removeEventListener("touchmove", mmove, false);
  drag.removeEventListener("touchend", mup, false);

  //クラス名 .drag も消す
  drag.classList.remove("drag");
}

elements.ondragstart = function() {
  return false;
};
