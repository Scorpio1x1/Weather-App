// icon imports
import clear_day from './icons/clear-day.png'
import clear_night from './icons/clear-night.png'
import cloudy from './icons/cloudy.png'
import fog from './icons/fog.png'
import hail from './icons/hail.png'
import partly_cloudy_day from './icons/partly-cloudy-day.png'
import partly_cloudy_night from './icons/partly-cloudy-night.png'
import rain_snow_showers_day from './icons/rain-snow-showers-day.png'
import rain_snow from './icons/rain-snow.png'
import rain from './icons/rain.png'
import showers_day from './icons/showers-day.png'
import showers_night from './icons/showers-night.png'
import sleet from './icons/sleet.png'
import snow_showers_day from './icons/snow-showers-day.png'
import snow_showers_night from './icons/snow-showers-night.png'
import snow from './icons/snow.png'
import thunder_rain from './icons/thunder-rain.png'
import thunder_showers_day from './icons/thunder-showers-day.png'
import thunder_showers_night from './icons/thunder-showers-night.png'
import thunder from './icons/thunder.png'
import wind from './icons/wind.png'


import { API_URL } from "./config";
import { API_KEY } from "./config";
import geolocate from "./geolocate";
import tempView from "./views/tempView";
import { AJAX } from "./helpers";
import previewView from './views/previewView'
import locationView from "./views/locationView";


const iconArr = [
    ['clear-day', clear_day],
    ['clear-night', clear_night],
    ['cloudy', cloudy],
    ['fog', fog],
    ['hail', hail],
    ['partly-cloudy-day', partly_cloudy_day],
    ['partly-cloudy-night', partly_cloudy_night],
    ['rain-snow-showers-day', rain_snow_showers_day],
    ['rain-snow', rain_snow],
    ['rain', rain],
    ['showers-day', showers_day],
    ['showers-night', showers_night],
    ['sleet', sleet],
    ['snow-showers-day', snow_showers_day],
    ['snow-showers-night', snow_showers_night],
    ['snow', snow],
    ['thunder-rain', thunder_rain],
    ['thunder-showers-day', thunder_showers_day],
    ['thunder-showers-night', thunder_showers_night],
    ['thunder', thunder],
    ['wind', wind]];

//AJAX(`${API_URL}${geolocate._success.cords}`)

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=YOUR_API_KEY 
let cords;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log('Not')
    }
}

function getCelcius(fTemp) {
    const cTemp = 5 / 9 * (fTemp - 32)
    const temp = (Math.round(cTemp * 100) / 100);
    return temp;
}

async function showPosition(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    cords = [latitude, longitude];
    console.log(cords);
    const data = await AJAX(`${API_URL}${cords[0]},${cords[1]}?${API_KEY}`);
    console.log(data);
    const fTemp = +data.days[0].temp;
    const prevTemp1 = +data.days[1].temp;
    const prevTemp2 = +data.days[2].temp;
    const temp = getCelcius(fTemp);
    const temp2 = getCelcius(prevTemp1);
    const temp3 = getCelcius(prevTemp2);
    const date1 = data.days[1].datetime.slice(-2);
    const date2 = data.days[2].datetime.slice(-2);
    const imgEl = document.getElementById('imgs');
    //const prev1 = document.getElementById('day-1');
    //const prev2 = document.getElementById('day-2');
    let prev1, prev2;
    for (let i = 0; i < iconArr.length; i++) {
        if (data.days[0].icon === iconArr[i][0]) {
            imgEl.src = iconArr[i][1];
        }
    }
    for (let i = 0; i < iconArr.length; i++) {
        if (data.days[1].icon === iconArr[i][0]) {
            prev1 = iconArr[i][1];
        }
    }
    for (let i = 0; i < iconArr.length; i++) {
        if (data.days[2].icon === iconArr[i][0]) {
            prev2 = iconArr[i][1];
        }
    }

    // Preview day 1



    //imgEl.src = sunny;
    tempView.render(temp, data.description);
    locationView.render(data.timezone);
    previewView.render(prev1, prev2, date1, date2, temp2, temp3);




}



//console.log(cords)

const getTemp = async function () {
    await getLocation();

}

getTemp();
/*

*/
