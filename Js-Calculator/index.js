

//calculator

const display=document.getElementById("display");

function appendTodisplay(input){
    display.value +=input;
}

function clearInputs(){
    display.value ="";
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
