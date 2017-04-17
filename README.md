# Библиотека, предоставляющая API для работы с расписанием лекций

## Запуск сборки:

$ gulp

## Локальный сервер по умолчанию:

http://localhost:8080

## Описание:

** Расписание лекций представлено в виде адаптивной таблицы. Пройденные лекции выделены серым цветом.**

Постепенная деградация была реализована благодаря веб форме, которая обрамляет фильтр и отправляет данные из фильтра для фильтрации на backend. Если js работает, то кнопка формы скрывается и форма работает без перезагрузки с перерисовкой таблицы с отфильтрованным результатом лекций. Фильтрация организована с помощью поиска, но в будущем монжно повысить юзабилити с помощью реализации выпадающего списка с подходящим результатом или какого-либо другого шаблона (при необходимости). Ссылки о лекторах и материалы также при нерабочем js переадресовывают на страницы с информацией о лекторах и материалами на backend. При запущенном js по клику на ссылки будет открываться всплывающее окно. В целом при настроенном нужным образом backend фильтрация будет работать и с отключенным js. 

Шаблонизацию типа handlebars применять не стал, т.к. подумал, что для данной задачи будет избыточно, поэтому реализовал callback функциями генерацию html шаблонов для отрисовки лекций в таблице.

Проверки для корректности данных в функциях добавил, но не все, т.к. не требовалось в задаче. Понимаю, что на практике нужно будет обрабатывать любые исключительные ситуации, в том числе некорректные данные, полученные по сети или недоступность этих данных.
Демо данные лекции помещены в js объект.

Для сборки проекта использован gulp, с применением scss, es6 (babel).
Реализация написана без применения стороних библиотек.

## Описание файлов проекта:

* `src/index.html` - индексный файл
* `src/style` - стили
* `src/js` - js скрипты 
*	`index.js` - входная точка
*	`_table.js` - работа с таблицей
*	`_popup.js` - работа с popup
*	`_filter.js` - реализация фильтрации
*	`template/...` - шаблоны генерации html
*	`data/_lesson_data.js` - демо данные лекций