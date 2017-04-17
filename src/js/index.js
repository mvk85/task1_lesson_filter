import { lessons } from './data/_lesson_data';
import filterClass from './_filter';
import table from './_table';

let filterContainer = document.querySelector('#filter');
let tableContainer = document.querySelector('.table');
let filter = new filterClass({
    lessons: lessons,
    filter: filterContainer,
    table: tableContainer
});

new table({
    table: tableContainer,
    data: lessons
});
