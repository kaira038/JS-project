

//clock


function updateClock(){
    const now=new Date();
    const hour=now.getHours().toString().padStart(2,0);
    const minute=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hour}:${minute}:${seconds}`;


    document.getElementById("clock").textContent=timeString;
}

updateClock();

setInterval(updateClock,1000)