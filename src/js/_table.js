import templateClass from "./template/template";
import popupClass from "./_popup";

export default class Table {
    constructor(options) {
        this.table = options.table;
        this.lectors = {};
        this.material = {};
        this.data = options.data;

        this.initEvent();
    }

    initEvent() {
        let table = this.table;

        table.addEventListener('click', (event) => {
            let target = event.target;
            let popup = new popupClass();

            if (target.tagName !== "A") {
                return;
            }
            
            if (target.classList.contains('lesson__lector')) {
                let lectors = this.getLectors();
                let id = target.dataset.id;
                let lector = new templateClass(lectors[id]);
                let content = lector.getHTMLLector();

                event.preventDefault();
                popup.open(content);
                popup.eventClose('.p_close');

            } else if (target.classList.contains('lesson__material')) {
                let materials = this.getMaterial();
                let id = target.dataset.id;
                let material = new templateClass(materials[id]);
                let content = material.getHTMLMaterial();

                event.preventDefault();
                popup.open(content);
                popup.eventClose('.p_close');
            }
            
            
        })
    }

    getLectors() {
        let data = this.data;
        let lectors = this.lectors;
        
        if (Object.keys(lectors).length < 1) {
            for (let i = 0; i < data.length; i++) {
                let element = data[i].lector;

                lectors[`${element.id}`] = element;
            }
            return lectors;
        }

        return lectors;
    }

    getMaterial() {
        let data = this.data;
        let material = this.material;

        if (Object.keys(material).length < 1) {
            for (let i = 0; i < data.length; i++) {
                let element = data[i].material;

                if (element) {
                    material[`${element.id}`] = element;
                }
            }
            return material;
        }

        return material;
    }
}