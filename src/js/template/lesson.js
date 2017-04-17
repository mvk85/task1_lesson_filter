export default class Template {
    constructor(){
        this.buffer = '';
    }

    compileLessons (objects) {
        this.cacheClear();
        
        for (let i = 0; i < objects.length; i++) {
            this.cache = this.compileLesson(objects[i]);
        }
        
        return this.cache;
    }

    compileLesson(object){
        let schema = this.getSchemaFieldsLesson();

        return `
            <tr ${object.material ? 'class="lecture__ended"' : ''}>
                <td data-label = "${schema.number}"><span>${object.number}</span></td>
                <td data-label = "${schema.school}"><span>${object.school}</span></td>
                <td data-label = "${schema.lecture}"><span>${object.lecture}</span></td>
                <td data-label = "${schema.lector}"><span><a href="${object.lector.src}" target="_blank" class="lesson__lector" data-id="${object.lector.id}">${object.lector.name}</a></span></td>
                <td data-label = "${schema.date}"><span>${object.date}</span></td>
                <td data-label = "${schema.location}"><span>${object.location}</span></td>
                <td data-label = "${schema.material}">
                    <span><a href="${object.material.src ? object.material.src : ''}" class="lesson__material" target="_blank" data-id="${object.material.id}">${object.material.name ? object.material.name : ''}</a></span>
                </td>
            </tr>`
    }

    set cache(lesson) {
        this.buffer = this.buffer + lesson;
    }

    get cache() {
        return this.buffer;
    }

    cacheClear() {
        this.buffer = '';
    }

    getSchemaFieldsLesson() {
        return {
            number: '№',
            school: 'Школа',
            lecture: 'Тема лекции',
            lector: 'Имя лектора',
            date: 'Дата',
            location: 'Место проведения',
            material: 'Материалы'
        }
    }
}