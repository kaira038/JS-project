

//Compound Interest calculator

function calculate(){

    const totalAmount=document.getElementById("total-amt");
    const principalInput=document.getElementById("principal");
    const rateInput=document.getElementById("rate");
    const yearOutput=document.getElementById("yearOutput");


    let principal=Number(principalInput.value);
    let InterestRate=Number(rateInput.value /100);
    let year=Number(yearOutput.value);


    if(principal<0||isNaN(principal)){
        principal=0;
        principalInput.value=0;
    }
    if(InterestRate<0||isNaN(InterestRate)){
        InterestRate=0;
        rateInput.value=0;
    }
    if(year<0||isNaN(year)){
        year=0;
        yearOutput.value=0;
    }
    

    // const result = principal * Math.pow((1 + InterestRate), year);
    
    const result = principal * Math.pow((1 + InterestRate / 1), 1 * year)

    totalAmount.textContent=result.toLocaleString(undefined,{style:"currency",currency:"INR"});

}