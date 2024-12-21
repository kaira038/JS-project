const minNumber=1;
const maxNumber=100;
const answer=Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);

let attempt=0;
let guess;
let running=true;


let button=document.getElementById("btn");

button.onclick=function(){
    while(running){
        guess=window.prompt(`Guess the Number between ${minNumber} and ${maxNumber}`);
        guess=Number(guess); //number 50
        //there is a function to check is not a number!
        if(isNaN(guess)){
            alert("please enter valid Number");
        }
        //what about below the minimum number or above the maximum number 
        else if(guess<minNumber||guess>maxNumber){
            alert("please enter valid Number");
        }
        else{
            attempt++;
            if(guess<answer){
                window.alert("Its too low, Try again!");
            }
            else if(guess>answer){
                window.alert("Its too high, Try again!")
            }
            else{
                window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt} attempts`);
                result=document.getElementById("result").textContent=`Resulted Number is: ${answer}`;
                result2=document.getElementById("result2").textContent=`Attempts : ${attempt}`;
                running = false; 
            }
        }
        
        // console.log(typeof guess, guess); //string 50
    
    }
}
    

// while(running){
//     guess=window.prompt(`Guess the Number between ${minNumber} and ${maxNumber}`);
//     guess=Number(guess); //number 50
//     //there is a function to check is not a number!
//     if(isNaN(guess)){
//         alert("please enter valid Number");
//     }
//     //what about below the minimum number or above the maximum number 
//     else if(guess<minNumber||guess>maxNumber){
//         alert("please enter valid Number");
//     }
//     else{
//         attempt++;
//         if(guess<answer){
//             window.alert("Its too low, Try again!");
//         }
//         else if(guess>answer){
//             window.alert("Its too high, Try again!")
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt} attempts`);
//             result=document.getElementById("result").textContent=`Resulted Number is: ${answer}`;
//             result2=document.getElementById("result2").textContent=`Attempts : ${attempt}`;
//             running = false; 
//         }
//     }
    
//     // console.log(typeof guess, guess); //string 50

// }




