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
const page3 = document.querySelector('.page3');
const btn1 = document.querySelector('#first-btn');
const btn2 = document.querySelector('#select-btn');
btn1.addEventListener('click',toSecond)
function toSecond(){
    page1.classList.remove('currentPage');
    setTimeout(() => {
        page2.classList.add('currentPage');
    }, 500);
}

var img;
const pics = document.querySelectorAll('.pic');
pics.forEach(x=>x.addEventListener('click',function(e) {
    pics.forEach(function(y){
        y.style.boxShadow='';
        y.classList.remove('selected');
    })
    x.style.boxShadow='0 0 5px 5px rgba(0, 0, 0, 0.2)';
    x.classList.add('selected');
    document.getElementById('select-btn').style.opacity=1;
    for(var i=0;i<3;i++){
        if(pics[i].classList.contains('selected')){
            var l = i;
            switch(l){
                case 0: 
                    img="url('pic1.jpg')";
                    break;
                case 1: 
                    img="url('pic3.jpg')";
                    break;
                case 2: 
                    img="url('pic2.jpg')";
                    break;
            }
        }
    }
}))
pics.forEach(x=>x.addEventListener("mouseover",function(e) {
    e.target.style.background = 'rgba(256, 256, 256, 0.6)';
}))
pics.forEach(x=>x.addEventListener("mouseout",function(e) {
    e.target.style.background = '';
}))

const puzzle = document.querySelector('.puzzle').children; 
btn2.addEventListener('click',toThird);
const choose = document.getElementById('.shuffle');
function toThird(){
    page2.classList.remove('currentPage');
    setTimeout(() => {
        page3.classList.add('currentPage');
    }, 500);
    for(let i=1;i<9;i++)
        puzzle[i].style.backgroundImage=img;
    for (let i = 1;i<9;i++)
        puzzle[i].addEventListener("click",move);
    const shuffleBtn = document.getElementById('shuffle-btn');




}    
function move(e){
    let pos = e.target.getBoundingClientRect();
    let tile= document.getElementById('a0').clientHeight;
    let emptyPos = document.getElementById('a0').getBoundingClientRect();
    let empty = document.getElementById('a0');
    if(((pos.top-tile-emptyPos.top<tile) && (pos.left==emptyPos.left)) || ((pos.left-tile-emptyPos.left<tile) && (pos.top==emptyPos.top))){
        let tempClass =  e.target.className;
        e.target.classList = empty.classList;
        empty.classList = tempClass;
        for(let i=1;i<9;i++)
            if(puzzle[i].className==puzzle[i].id)
                puzzle[i].style.border = '.2vw solid green'
            else
                puzzle[i].style.border = '.2vw solid red'
    }
}