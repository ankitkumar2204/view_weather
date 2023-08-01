const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityname.innerHTML = city
fetch('https://weather-by-api-ninja.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(Response => Response.json())
    .then((Response) => {
          
        console.log(Response)
        //cloud_pct.innerHTML = Response.cloud_pct
        temp.innerHTML = Response.temp
        temp2.innerHTML = Response.temp
        feels_like.innerHTML = Response.feels_like
        humidity.innerHTML = Response.humidity
        humidity2.innerHTML = Response.humidity
        min_temp.innerHTML = Response.min_temp
        max_temp.innerHTML = Response.max_temp
        wind_speed.innerHTML = Response.wind_speed
        wind_speed2.innerHTML = Response.wind_speed
        wind_degrees.innerHTML = Response.wind_degrees
        sunrise.innerHTML = Response.sunrise
        sunset.innerHTML = Response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")