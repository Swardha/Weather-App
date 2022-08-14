// initializing elements
const datainp = document.querySelector("#inp-data");
const button = document.querySelector("#search-btn");
const result = document.querySelector("#result");
const wowDay = document.querySelector("#day");
const togglerBtn = document.querySelector("#toggler");
// const cardTwo = document.querySelector(".card-2");
// const headTwo = document.querySelector(".head2");
// const headFour = document.querySelector(".head4");
// const headThree = document.querySelector(".head3");

togglerBtn.addEventListener("click", ()=>{
    console.log("working");
    // document.body.style.backgroundColor="rgb(4, 34, 4)";
    // cardTwo.style.backgroundColor="rgb(8, 117, 8)";
    // headTwo.style.color="white";
    // headThree.style.color="white";
    // headFour.style.color="white";
    // document.cardTwo.classList.toggle('dark-theme');
    document.getElementsByTagName('body')[0].classList.toggle('dark');
}) 
// making array for months
var monthsList = ["January" , "February" , "March", "April", "May", "June", "July", "August", "September","Octber", "November","December"];

// logic for displaying current month and year
    d = new Date()
    // let month = d.getMonth();
    console.log(monthsList[d.getMonth()]); 
    console.log(d.getFullYear()); 
    console.log(d.getDate()); 
// printing current month and year
    wowDay.innerText = monthsList[d.getMonth()] +" "+ d.getDate()+ ", " +  d.getFullYear();
// adding event to search button
button.addEventListener('click', ()=>{
    let city = datainp.value;
    console.log(city);
// url for fetching details of weather
    let url ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70121d07d318052c9ffc2b037e22a6f8&units=metric"
//  feteching details from url  
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        console.log(data.main.temp);
        console.log(data.weather[0].main);
        console.log(data.weather[0].icon);
        console.log(data.name);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
    //displaying search result details 
        result.innerHTML=`
        <h2 class="head2">${data.name}</h2>
        <h4 class="head4">${data.weather[0].main}</h4>
        <img class="show-weather" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h2 class="head2">${data.main.temp}&#176;</h2>
        <div class="temp-min-max">
        <div>
        <h4 class="head4">min</h4>
        <h4 class="head4">${data.main.temp_min}</h4>
        </div>
        <div>
        <h4 class="head4">max</h4>
        <h4 class="head4">${data.main.temp_max}</h4>
        </div>
        
        `
})

});
