var name = document.getElementById('contact').innerHTML = "call us" ;

var name1 = document.getElementById('contact').style.color = 'blue';

var name2 = document.querySelector('.submit').addEventListener('click' , fone);
function fone(e){
    alert('are you sure?');
    e.preventDefualt()
};
var name3 = document.querySelector('.fname').addEventListener('keydown', ftwo);
function ftwo(e){
    document.getElementById('name').style.border = '9px solid blue';
    document.getElementById('name').style.fontSize = '20px';
    
};
var name4 = document.querySelector('.fname1').addEventListener('keydown', fthree);
function fthree(e){
    document.getElementById('name1').style.border = '9px solid red';
    document.getElementById('name1').style.fontSize = '20px';
    e.preventDefualt();
};
var name5 = document.querySelector('.fname2').addEventListener('keydown', ffour);
function ffour(e){
    document.getElementById('name2').style.border = '9px solid black';
    document.getElementById('name2').style.fontSize = '20px';
    e.preventDefualt();
};
var name6 = document.querySelector('.fname3').addEventListener('keydown', ffive);
function ffive(e){
    document.getElementById('name3').style.border = '9px solid yellow';
    document.getElementById('name3').style.fontSize = '20px';
    e.preventDefualt();
};
var name7 = document.querySelector('.fname4').addEventListener('keydown', fsix);
function fsix(e){
    document.getElementById('name4').style.border = '9px solid green';
    document.getElementById('name4').style.fontSize = '20px';
    e.preventDefualt();
};
    
var name8 = document.querySelector('.submit').addEventListener('focus' , fseven);
function fseven(e){
    document.getElementById('sub').style.backgroundColor = 'gray';
    e.preventDefualt()
};


 

document.querySelector('.fname').addEventListener('keydown' , feight);
function feight(e){
    document.getElementById('name');
    

}


const names = localStorage.getItem('name1');
localStorage.setItem('.fname1', JSON.stringify(name1));
