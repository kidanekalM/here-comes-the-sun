stars = document.getElementsByClassName('star');
for(i=0;i<stars.length;i++){
    stars[i].style.top=(Math.random()*50) +"vh";
    stars[i].style.left=(Math.random()*100) +"vw";
}
window.onload=function () {
    document.getElementById('song').play();
}
setInterval(function () {
    document.getElementById('song').currentTime=0;
},40000)