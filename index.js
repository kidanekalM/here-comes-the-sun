stars = document.getElementsByClassName('star');
for(i=0;i<stars.length;i++){
    stars[i].style.top=(Math.random()*50) +"vh";
    stars[i].style.left=(Math.random()*100) +"vw";
} 
document.querySelector('.sunwrapper').addEventListener('click',function(){
    // location.reload();
    document.getElementById('song').play();
})
