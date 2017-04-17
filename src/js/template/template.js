export default class Template {
    constructor(template){
        this.template = template;
    }

    getHTMLLector () {
        return this.compileLector(this.template);
    }

    compileLector(lector){
        return `<div class="lector__popup">
            <div class="lector__popup-name">${lector.name}</div>
            <div class="lector__popup-img">
                <img src="${lector.src}" alt="">
            </div>
            <div class="lector__popup-text">${lector.description}</div>
            <a href="" class="p_close">x</a>
            </div>`;
    }

    getHTMLMaterial () {
        return this.compileMaterial(this.template);
    }

    compileMaterial(material){
        return `<div class="lector__popup">
            <div class="lector__popup-name">${material.name}</div>
            <div class="lector__popup-img">
                <a href="${material.src}" alt="" target="_blank">
                    Перейти к просмотру материалов
                </a>
            </div>
            <a href="" class="p_close">x</a>
            </div>`;
    }
}