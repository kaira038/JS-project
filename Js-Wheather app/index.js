// Wheather App 


const wheatherForm = document.querySelector(".wheatherForm");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");
const apiKey = "cf81517fd864488828b3e005a5f607b8";



wheatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getwheather(city);
            displayWheatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }

    }
    else {
        displayError("Please enter the city Name");
    }

});

async function getwheather(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    // console.log(response);

    if (!response.ok) {
        throw new Error("enter valid city")
    }
    return await response.json(); //if ok --> return object

}

function displayWheatherInfo(data) {

    console.log(data);  //try miami -city

    const {   //object destructuring
        name: city,
        main: { humidity, temp },
        weather: [{ description, id }] } = data;

    card.textContent="";
    card.style.display="flex";    


    const cityDisplay=document.createElement("h1");
    const tempDisplay=document.createElement("p");
    const humidityDisplay=document.createElement("p");
    const discDisplay=document.createElement("p");
    const weatherEmoji=document.createElement("p");
    
    cityDisplay.textContent=city;
    // tempDisplay.textContent=`${temp}°k`;
    // tempDisplay.textContent=`${(temp-273.15).toFixed(1)}°c`;
    tempDisplay.textContent=`${((temp-273.15)*(9/5+32)).toFixed(1)}°F`;
    humidityDisplay.textContent= `Humidity:${humidity} %`;
    discDisplay.textContent=description;
    weatherEmoji.textContent=getwheatherEmoji(id);
    

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    discDisplay.classList.add("discDisplay");
    weatherEmoji.classList.add("weatherEmoji");


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(discDisplay);
    card.appendChild(weatherEmoji);

}
function getwheatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "🌞";
    }

}
function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");


    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}