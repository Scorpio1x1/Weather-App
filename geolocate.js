import { API_KEY, API_URL } from "./config";
import { AJAX } from "./helpers";
import tempView from "./views/tempView";

class geolocate {
    /* _coords;
     temp;
     constructor() {
         this._getLocation();
     }
 
 
     _getLocation() {
         // const cords = navigator.geolocation.watchPosition(function (pos) {
         //     const { latitude } = pos.coords;
         //     const { longitude } = pos.coords;
         //    return { latitude, longitude };
         // -26.13248,27.8888448
         //AJAX(`${API_URL}${geolocate._success.cords}`)
 
         //            const data = await AJAX(`${API_URL}-26.13248,27.8888448?${API_KEY}`);
         //const fTemp = +data.days[0].temp
         //const cTemp = 5 / 9 * (fTemp - 32)
         //const temp = (Math.round(cTemp * 100) / 100);
         //tempView.render(temp)
 
         //})
 
         //this._coords = cords.latitude;
         // console.log(this._coords);
 
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(showPosition());
         } else {
             console.log('Not found')
         }
     }
 
     showPosition(pos) {
         console.log(pos.coords.latitude);
     }
 
     _getTemp() {
 
     }*/
};


export default new geolocate();
