var a=document.querySelectorAll('button');
console.log(a);
var s;
a.forEach(addEventListener("click",function(e) {
    var t = e.target.id;
    console.log(t);
    s = document.querySelector('#'+t);
    s.play();
    if(s.currentTime>3)s.pause();
    s.currentTime=0;
}));

