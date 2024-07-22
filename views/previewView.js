class previewView {
    _parentEl = document.querySelector('.weather--preview');

    _markup(icon1, icon2, date1, date2, temp1, temp2) {
        return `
            <div class="day-1">
                    <img src="${icon1}">
                    <h1>${date1}</h1>
                    <p>${temp1} C</p>
                </div>
                <div class="day-2">
                    <img src="${icon2}">
                    <h1>${date2}</h1>
                    <p>${temp2} C</p>
                </div>
        `
    }

    render(icon1, icon2, date1, date2, temp1, temp2) {
        this._parentEl.insertAdjacentHTML('beforeend', this._markup(icon1, icon2, date1, date2, temp1, temp2));
    }

}

export default new previewView();