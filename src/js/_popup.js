export default class Popup{
    constructor(){
        this.initWindow();
    }

    initWindow() {
        let window = document.querySelector('.popup__cnt');

        if (!window) {
            window = document.createElement('div');
            window.classList.add('popup__cnt');
            window.innerHTML = `<div class="popup__cnt--window"></div>`;
            document.body.appendChild(window);
        }

        this.window = window;
    }

    open(content) {
        this.window.classList.add('active');
        this.setContent(content);
    }

    eventClose(nodeString) {
        let node = document.querySelector(nodeString);

        node.addEventListener('click', (event) => {
            this.close();
            event.preventDefault();
        })
    }

    close() {
        this.window.classList.remove('active');
    }

    setContent(content) {
        let container = this.window.querySelector('.popup__cnt--window');

        container.innerHTML = content;
    }
} 