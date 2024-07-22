

class tempView {
    _parentElement = document.querySelector('.temp');

    _markup(temp, description) {
        return `
                <h1>${temp} C</h1>
                <p>${description}</p>
        `
    }
    render(temp, description = '') {
        this._parentElement.insertAdjacentHTML('beforeend', this._markup(temp, description));
    }

}

export default new tempView();