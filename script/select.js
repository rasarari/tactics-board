var left = document.getElementById("left_team");
var right = document.getElementById("right_team");

function butotnClick(){
  localStorage.setItem("left", left.value);
  localStorage.setItem("right", right.value);
}

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);