class locationView {
    _parentElement = document.querySelector('.city');
    _markup(name) {
        return `
                <h1>${name}</h1>
        `
    }
    render(name) {
        this._parentElement.insertAdjacentHTML('beforeend', this._markup(name));
    }

}

export default new locationView();