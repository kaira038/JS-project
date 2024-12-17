// let randomNumber=Math.floor(Math.random()*6);  //random num b/w 1-5
// randomNumber=Math.floor(Math.random()*6)+1; //random num b/w 1-6
// randomNumber=Math.floor(Math.random()*100)+1;//random num b/w 1-100

// let max=100;
// let min=50;
// let randomNum=Math.floor(Math.random()*(max-min)+min);

// console.log(randomNum);
// console.log(randomNumber);



//RANDOM NUMBER GENERATOR

const mybutton=document.getElementById("btn");
const mylabel1=document.getElementById("mylabe1");
const mylabel2=document.getElementById("mylabe2");
const mylabel3=document.getElementById("mylabe3");
const max=6;
const min=1;
let randomNum;
let randomNum2;
let randomNum3;

mybutton.onclick=function(){
    randomNum=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    mylabel1.textContent=randomNum;
    mylabel2.textContent=randomNum2;
    mylabel3.textContent=randomNum3;
}