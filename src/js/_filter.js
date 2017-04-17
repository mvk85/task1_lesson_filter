import template from './template/lesson'

export default class Filter {
    constructor(options){
        this.lessons = options.lessons;
        this.table = options.table;
        this.initFilter(options.filter);
    }

    initFilter (filterContainer) {
        this.inputSchool = filterContainer.querySelector('input[name="filter-school"]');
        this.inputLector = filterContainer.querySelector('input[name="filter-lector"]');
        this.inputDate = filterContainer.querySelector('input[name="filter-date"]');
        this.buttonSubmit = filterContainer.querySelector('[type="submit"]');

        this.buttonSubmit.style.display = 'none';

        filterContainer.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        filterContainer.addEventListener('keyup', (event) => {
            let filter = this.getFilterValue();
            let stringLessons = this.getStringLessons(filter);

            this.renderLessonDom(stringLessons);
        });

        document.addEventListener('DOMContentLoaded', () => {
            let stringLessons = this.getStringLessons();

            this.renderLessonDom(stringLessons);
        })
    }

    getStringLessons(filter = false) {
        let lessons;
        let templateLesson = new template();

        if (!filter) {
            lessons = this.lessons;
        } else {
            lessons = this.filterLessons({
                lessons: this.lessons,
                filter: filter
            })
        }

        return templateLesson.compileLessons(lessons);
    }

    renderLessonDom (stringLessons) {
        let tbody = this.table.querySelector('tbody');

        tbody.innerHTML = stringLessons;
    }

    filterLessons(options) {
        let arLessons = options.lessons;
        let filter = options.filter;
        let result = [];

        for (let i = 0; i < arLessons.length; i++) {
            let lesson = arLessons[i];
            let isMatch = this.isMatchingLesson(filter, lesson);

            if (isMatch) {
                result.push(lesson);
            }
        }

        return result;
    }

    isMatchingLesson (filter, lesson) {
        let arFilter = Object.keys(filter);

        for (let j = 0; j < arFilter.length; j++) {
            let keyFilter = arFilter[j];
            let valueLesson = lesson[keyFilter];
            let valueFilter = filter[keyFilter];

            if (typeof valueLesson === "object" && typeof valueFilter === "object") {
                if (!this.isMatching(valueLesson[valueFilter['key']], valueFilter['value'])) {
                    return false;
                }
            } else if (Array.isArray(valueLesson)) {
                let isMatch = false;

                for (let i = 0; i < valueLesson.length; i++) {
                    let item = valueLesson[i];

                    if (this.isMatching(item, valueFilter)) {
                        isMatch = true;
                        break;
                    }
                }
                
                if (!isMatch) {
                    return false;
                }
                
            } else {
                
                if (!this.isMatching(valueLesson, valueFilter)) {
                    return false;
                }
            }
        }

        return true;
    }

    isMatching (val1, val2) {
        val1 = val1.toLowerCase();
        val2 = val2.toLowerCase();

        return val1.indexOf(val2) == -1 ? false : true;
    }

    isEmptyInputs (arValue) {
        for (let i = 0; i < arValue.length; i++) {
            if (!this.isEmpty(arValue[i])) {
                return false;
            }
        }

        return true;
    }

    isEmpty (value) {
        return value ? false : true;
    }

    getFilterValue () {
        let result = {};
        let schoolValue = this.inputSchool.value;
        let lectorValue = this.inputLector.value;
        let dateValue = this.inputDate.value;
        let arValue = [schoolValue, lectorValue, dateValue];

        if (this.isEmptyInputs(arValue)) {
            return false;
        };

        if (schoolValue) {
            result.school = schoolValue;
        }

        if (lectorValue) {
            result.lector = {
                key: 'name',
                value: lectorValue
            }
        }

        if (dateValue) {
            result.date = dateValue;
        }

        return result;
    }
}