function days(bd){
    let date = new Date(),
    a = bd.split('.'),
    y = date.getFullYear(),
    m =date.getMonth(),
    d = date.getDate(),
    ans = 0,bn=0,n=0,
    mnth = [,31,28,31,30,31,30,31,31,30,31,30,31];
    [a[0],a[1],a[2]]=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)];
    if(((a[2] % 4 == 0) && (a[2] % 100 >0)) || (a[2] % 400 == 0)) mnth[2] = 29;
    console.log(a);
    for (let i = a[0];i < mnth[a[1]];i++){ 
        ++ans;
    }
    a[0]=1;
    ++a[1];
    if(a[1]==13){
        a[1]=1;
        ++a[2];
    }
    if(a[1]>m){
        for(let i=a[1]; i<=12;i++){
            ans+=mnth[i];
        }
        a[1]=1;
        a[2]++;
    }
    if(((a[2] % 4 == 0) && (a[2] % 100 >0)) || (a[2] % 400 == 0)) mnth[2] = 29;
    for(let i=a[1]; i < m;i++){
        ans+=mnth[i];
    }
    for(let i=a[2];i<y;i++){
        if(((i % 4 == 0) && (i % 100 >0)) || (i % 400 == 0)) {ans+=366;} else {ans+=365;}
    }
    ans+=d;
    return ans;
}
function ageInDays(){
    let birthday = document.getElementById('dayinput').value;
    let txt = document.createTextNode ('You are '+days(birthday)+' days old!');
    let h1 = document.createElement('h1');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(txt);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('flex-box-result').remove();
}
function generate(){
    let img = document.createElement('img');
    let div = document.getElementById('fbc2');
    img.src = 'user1.jpg'
    img.setAttribute('alt','There supposed to be a img');
    img.setAttribute('id','generated');
    div.appendChild(img);
}
function removeimg(){
    let img = document.getElementById('generated');
    if (img != null){
        img.remove();
    }   
}

function myChoice(n){
    let n1 = Math.floor(Math.random()*4);
    let [p1,p2,p3]=[document.getElementById('first'),document.getElementById('second'),document.getElementById('third')];
    let h2 = document.createElement('h2');
    let s;
    switch (n){
        case 1:
            p1.src = 'Rock.jpg'
            break;
        case 2:
            p1.src = 'Paper.jpg'
            break;
        case 3:
            p1.src = 'Scissors.jpg'
    }
    switch (n1){
        case 1:
            p3.src = 'Rock.jpg'
            break;
        case 2:
            p3.src = 'Paper.jpg'
            break;
        case 3:
            p3.src = 'Scissors.jpg'
    }
    if(((n == 1) && (n1 == 3)) || ((n == 2) && (n1 == 1)) || ((n == 3) && (n1 == 2))){
        s = 'You Won!'
    }else if(n1 == n){
        s = 'Draw!'
    }else{
        s = 'You Lost'
    }
    let text = document.createTextNode(s);
    p2.remove();
    h2 = text;
    document.getElementById('ans').appendChild(h2);
    h2.style.fontSize = 'x-large';
}