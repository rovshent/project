var a=document.querySelectorAll('button');
var s;
console.log(a);
a.forEach(addEventListener("click",function(e) {
    s = document.querySelector('#'+e.target.id);
    s.play();
    if(s.currentTime>3)s.pause();
    s.currentTime=0;
}));

