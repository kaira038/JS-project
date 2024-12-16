const label=document.getElementById("mylabel");
const decreasebutton=document.getElementById("decreasebtn");
const reset= document.getElementById("resetbtn");
const incresebutton=document.getElementById("Increasebtn");

let count=0;

incresebutton.onclick=function(){
    count++;
    label.textContent=count;
}
decreasebutton.onclick=function(){
    count--;
    label.textContent=count;
}
reset.onclick=function(){
    count=0;
    label.textContent=count;
}
