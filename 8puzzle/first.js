const a=document.querySelector('.animation-bar').children;
var k=3;
const timer = setInterval(change,2000);
function change(){
    if(a[(k-1)%3].classList.contains('appeared')) a[(k-1)%3].classList.remove('appeared');
    a[k%3].classList.add('appeared');
    ++k;
}
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
var btn = document.querySelector('#first-btn');
btn.addEventListener('click',toSecond)
function toSecond(){
    btn.classList.add('clicked');
    page1.classList.remove('currentPage');
    setTimeout(() => {
        page2.classList.add('currentPage');
    }, 1000);
}

const pics = document.querySelectorAll('.pic');
pics.forEach(x=>x.addEventListener('click',function(e) {
    pics.forEach(function(y){
        y.classList.remove('selected');
        y.children[0].classList.remove('front');
    })
    e.target.classList.add('selected');
    e.target.children[0].classList.add('front');
    document.getElementById('select-btn').style.opacity=1;

}))
