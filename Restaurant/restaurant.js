var k=0;
function nav(){
    ++k;
    if (k % 2 == 0){
        document.getElementById('nav').style.display = 'grid';
    }else{
        document.getElementById('nav').style.display = 'none';
    }
}