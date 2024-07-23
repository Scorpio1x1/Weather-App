

class tempView {
    _parentElement = document.querySelector('.temp');

    _markup(temp, description, feelsLike = 12, wind = 12, humidity = 12) {
        return `
                <h1>${temp}°</h1>
                <p>${description}</p>
                    <p class="feelsLike"><span class="info--span">Feels Like</span>${feelsLike}</p>
                    <p class="wind"><span class="info--span">Wind Speed</span>${wind}</p>
                    <p class="humidity"><span class="info--span">Humidity</span>${humidity}</p>
        `
    }
    render(temp, description = '', feelsLike, wind, humidity) {
        this._parentElement.insertAdjacentHTML('beforeend', this._markup(temp, description, feelsLike, wind, humidity));
    }

}

export default new tempView();