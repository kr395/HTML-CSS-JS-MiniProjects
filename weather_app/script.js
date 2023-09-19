const inputFild = document.getElementById('city_name');
const main = document.querySelector('main');
const submit = document.getElementById('submit-btn');
const div = document.createElement('div');

submit.addEventListener('click', () =>{
const apiKey = "b6456d5c81dee517d8ad0d59147ad7bf";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFild.value}&appid=${apiKey}&units=metric`;
       
async function getWeather(){
       const response = await fetch(url)
       console.log(response)
       if (!response.ok) {
       throw new Error("Couldn't get data");
      }
      const data = response.json();
      return data;
}
getWeather().then((response) => console.log(response))
.catch((error) => {throw new Error(error)});
    
})




