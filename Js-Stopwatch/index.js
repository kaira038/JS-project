// elapsed time refers to the total amount of time 
// that has passed between the start and stop points of the stopwatch.


// 1. Start Time: The moment when the stopwatch begins counting.

// 2. Stop Time: The moment when the stopwatch is stopped.

// 3. Elapsed Time: The difference between the stop time and start time,
//  usually presented in seconds or minutes 
// (and may include fractions of a second).

        //The program would calculate this by 
        // subtracting the start time from the stop time to determine 
        // how long the stopwatch was running.

//Date.now(): This method returns the number of milliseconds 
// that have passed since the Unix epoch.


const display=document.getElementById("display"); 
let startTime =0;
let elapsedTime =0;      
let isRunning=false;
let timer=null;





function start(){

    if(!isRunning){
        startTime=Date.now()-elapsedTime;
       // console.log(startTime); //1736615780403
       timer=setInterval(update,10);
       isRunning=true;
    }
    

}

function stop(){
    if(isRunning){
        clearInterval(timer);
       elapsedTime=Date.now()-startTime;
        isRunning=false;
    }   
}

function reset(){
    clearInterval(timer)
     startTime =0;
     elapsedTime =0;      
     isRunning=false;
     display.textContent="00:00:00:00";
}

function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;
    
    // time is converted to the appropriate units 

    let hour=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let secondss=Math.floor(elapsedTime/1000%60);
    let milliseconds=Math.floor(elapsedTime%1000/10);

    // hour=hour.toString().padStart(2,"0");
    hour=String(hour).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    secondss=String(secondss).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");



    display.textContent=`${hour}:${minutes}:${secondss}:${milliseconds}`;


    
    
}