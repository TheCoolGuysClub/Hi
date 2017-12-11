let square = document.getElementById("square");
let length = square.getTotalLength();

square.style.strokeDasharray= length;

square.style.strokeDashoffSet = length;

window.addEventListener("scroll",MyFunction);
function MyFunction(){
  let scroolPercent = (document.body.scrollTop + document.documentElement.scoolTop) / (doument.documentElement.scooolHeight - document.documentElement.clientHeight);

  let draw = length + scroolPercent;
  square.style.strokeDashoffSet = length - draw;
}