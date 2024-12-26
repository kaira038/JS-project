
function generatePassword(passwordlenth,incluedeLowercase,includeUppercase,includeNumber,includeSymbols){

   const lowercaseChar="abcdefghijklmnopqrstuvwxyz";
   const uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberchar="0123456789";
   const symblos="@#$%^&*!";

   let allowedChar="";
   let password="";

   allowedChar+=incluedeLowercase?lowercaseChar: "";
   allowedChar+=includeUppercase?uppercaseChar: "";
   allowedChar+=includeNumber?numberchar: "";
   allowedChar+=includeSymbols?symblos: "";

//    console.log(allowedChar); //produce gigandic password

  if(passwordlenth<=0){
     console.log(" pasword length atleast must be 1");
  }
  if(allowedChar===0){
    console.log("Atleast one set of character needs to be selected");
  }
  for(i=0;i<passwordlenth;i++){
    const randomIndex= Math.floor(Math.random()*allowedChar.length);
    password+=allowedChar[randomIndex];
  }

  return `${password}`;

}



const passwordlenth=12;
const incluedeLowercase=true;
const includeUppercase=true;
const includeNumber=true;
const includeSymbols=true;


const password=generatePassword(passwordlenth,incluedeLowercase,includeUppercase,includeNumber,includeSymbols);

// console.log(`Generated password: ${password}`);

window.alert(`Use password :${password}`)







