const a=document.querySelector('.animation-bar').children;
var k=3;
const timer = setInterval(change,1500);
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
    }, 350);
}

var img;
const pics = document.querySelectorAll('.pic');
pics.forEach(x=>x.addEventListener('click',function(e) {
    pics.forEach(function(y){
        y.style.boxShadow='';
        y.classList.remove('selected');
    })
    x.style.boxShadow='0 0 7px 7px rgba(0, 0, 0, 0.4)';
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
const shuffleBtn = document.querySelector('#shuffle-btn');
const selected = document.querySelector('#shuffle');
function toThird(){
    page2.classList.remove('currentPage');
    setTimeout(() => {
        page3.classList.add('currentPage');
    }, 300);
    for(let i=1;i<9;i++)
        puzzle[i].style.backgroundImage=img;
    selected.addEventListener('click',function(e){
        var myPromise = new Promise(function(myResolve){
            if(selected.value!=0)myResolve();
        })
        myPromise.then(function(){
            shuffleBtn.style.opacity = 1;
        });
    })
    shuffleBtn.addEventListener('click',shuffle);
}
function border(){
    for(let i=1;i<9;i++)
        if(puzzle[i].classList.contains(puzzle[i].id))
            puzzle[i].style.border = '.2vw solid green';
        else
            puzzle[i].style.border = '.2vw solid red';
}
function move(e){
    let pos = e.target.getBoundingClientRect();
    let tile= document.getElementById('a0').clientHeight;
    let emptyPos = document.getElementById('a0').getBoundingClientRect();
    let empty = document.getElementById('a0');
    if(((Math.abs(pos.top-emptyPos.top)-tile<tile) && (pos.left==emptyPos.left)) || ((Math.abs(pos.left-emptyPos.left)-tile<tile) && (pos.top==emptyPos.top))){
        let tempClass =  e.target.className;
        e.target.classList = empty.classList;
        empty.classList = tempClass;
        border();
    }
}
function candidate(){
    let emptyPos = document.getElementById('a0').getBoundingClientRect();
    let tile= document.getElementById('a0').clientHeight;
    for(let i = 1; i<9;i++){
        let pos = puzzle[i].getBoundingClientRect();
        if(((Math.abs(pos.top-emptyPos.top)-tile<tile) && (pos.left==emptyPos.left)) || ((Math.abs(pos.left-emptyPos.left)-tile<tile) && (pos.top==emptyPos.top))){
            puzzle[i].firstChild.classList.add('candidate');
        }else{
            puzzle[i].firstChild.classList.remove('candidate');
        }
    }
}
function onHover() {
    for(let i=1;i<9;i++){
        if(puzzle[i].firstChild.classList.contains('candidate')){
            puzzle[i].firstChild.classList.remove('onHover');
        }else{
            puzzle[i].firstChild.classList.add('onHover');
        }
    }
}
function offHover(){
    for(let i=1;i<9;i++)
        puzzle[i].firstChild.classList.remove('onHover');
}
let focus,ifWon;
function shuffle(){
    selected.style.display = 'none';
    shuffleBtn.style.display = 'none';
    document.getElementById('h1').style.display = 'none';
    let n = selected.value;
    var speed;
    switch(n){
        case '3':
            speed=500;
            break;
        case '30':
            speed=200;
            break;
        case '50':
            speed=100;
            break;
    }
    for(let i=1;i<9;i++){
        puzzle[i].style.transitionDuration = speed+'ms';
    }
    let k=0;
    let prev=0;
    while (k < n){
        setTimeout(function(){
            let tile= document.getElementById('a0').clientHeight;
            let emptyPos = document.getElementById('a0').getBoundingClientRect();
            let empty = document.getElementById('a0');
            let b=false;
            let pos;
            let randNum;
            while (!b){
                randNum = Math.floor(Math.random()*8)+1;
                if(prev==puzzle[randNum].id)continue;
                pos = puzzle[randNum].getBoundingClientRect();
                if(((Math.abs(pos.top-emptyPos.top)-tile<tile) && (pos.left==emptyPos.left)) || ((Math.abs(pos.left-emptyPos.left)-tile<tile) && (pos.top==emptyPos.top))){
                    b=true;
                }    
            }
                curr = puzzle[randNum];
                let tempClass =  curr.className;
                curr.classList = empty.classList;
                empty.classList = tempClass;
                border();
                prev = curr.id;
        },k*speed);
        ++k;
    }
    setTimeout(function(){
        document.querySelector('#h2').style.display= 'block';
        document.querySelector('#h3').style.display= 'block';
        for(let i=1;i<9;i++)
            puzzle[i].style.transitionDuration = 500+'ms';
        for(let i=1;i<9;i++)
            puzzle[i].addEventListener("click",move);
        focus = setInterval(candidate,1);
        document.querySelector('.puzzle').addEventListener('mouseover',onHover);
        document.querySelector('.puzzle').addEventListener('mouseout',offHover);
        ifWon = setInterval(checkIfWon,10);
    },n*speed);
}
let congrats = document.querySelector('#won');
function checkIfWon() {
    let b=true;
    for(let i = 0; i<9; i++)
        if(puzzle[i].id!=puzzle[i].className)
            b=false;
    if(b) won();
}
function won() {
    clearInterval(ifWon);
    ifWon=null;
    congrats.classList.remove('unvisible');
    congrats.classList.add('won');
    setTimeout(() => {
        congrats.classList.add('end');
    }, 100);
    window.onkeydown = (e)=>{
        if(e.keyCode=='116') reloadPuzzle();
        e.preventDefault();
    }
}
function reloadPuzzle(){
    selected.style.display = 'block';
    shuffleBtn.style.display = 'block';
    document.querySelector('#h2').style.display= 'none';
    document.querySelector('#h3').style.display= 'none';
    document.querySelector('#h1').style.display= 'block';
    congrats.classList.add('unvisible');
    congrats.classList.remove('won');
    congrats.classList.remove('end');
    clearInterval(focus);
    for(let i=1;i<9;i++){
        puzzle[i].style.transitionDuration = 0;
        puzzle[i].firstChild.classList.add('candidate');
        puzzle[i].removeEventListener("click",move);
    } 
    window.onkeydown = (e)=>{
        if(e.keyCode=='116') document.location.reload(true);
        e.preventDefault();
    }
}