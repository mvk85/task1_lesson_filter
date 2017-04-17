let lessons = [
    {
        number: 1,
        school: 'Разработка интерфейсов',
        lecture: 'Адаптивная вёрстка',
        lector: {
            id: 1,
            name: 'Дмитрий Душкин',
            src: 'https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big',
            description: 'Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.'
        },
        date: '01.07.2017',
        location: 'Аудитория 1',
        material: {
            id: 1,
            name: 'Материалы',
            src: 'https://events.yandex.ru/lib/talks/4162/'
        }
    },
    {
        number: 2,
        school: 'Разработка интерфейсов',
        lecture: 'Работа с сенсорным пользовательским вводом',
        lector: {
            id: 1,
            name: 'Дмитрий Душкин',
            src: 'https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big',
            description: 'Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.'
        },
        date: '02.07.2017',
        location: 'Аудитория 1',
        material: ''
    },
    {
        number: 3,
        school: 'Разработка интерфейсов',
        lecture: 'Мультимедиа: возможности браузера',
        lector: {
            id: 2,
            name: 'Максим Васильев',
            src: 'https://avatars.mds.yandex.net/get-yaevents/194464/21e1dae2b6dc11e687ef002590c62a5c/big',
            description: 'Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.'
        },
        date: '03.07.2017',
        location: 'Аудитория 2',
        material: ''
    },
    {
        number: 4,
        school: 'Мобильная разработка',
        lecture: 'Java Blitz (Часть 1)',
        lector: {
            id: 3,
            name: 'Эдуард Мацуков',
            src: 'https://avatars.mds.yandex.net/get-yaevents/198307/9d9a8672b6da11e687ef002590c62a5c/big',
            description: 'Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.'
        },
        date: '01.07.2017',
        location: 'Аудитория 4',
        material: {
            id: 2,
            name: 'Материалы',
            src: 'https://events.yandex.ru/lib/talks/4162/'
        }
    },
    {
        number: 5,
        school: 'Мобильная разработка',
        lecture: 'Git & Workflow',
        lector: {
            id: 4,
            name: 'Дмитрий Складнов',
            src: 'https://avatars.mds.yandex.net/get-yaevents/197753/08c605ecb6dc11e687ef002590c62a5c/big',
            description: 'Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android.'
        },
        date: '02.07.2017',
        location: 'Аудитория 4',
        material: ''
    },
    {
        number: 6,
        school: 'Мобильная разработка',
        lecture: 'Java Blitz (Часть 2)',
        lector: {
            id: 3,
            name: 'Эдуард Мацуков',
            src: 'https://avatars.mds.yandex.net/get-yaevents/198307/9d9a8672b6da11e687ef002590c62a5c/big',
            description: 'Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.'
        },
        date: '03.07.2017',
        location: 'Аудитория 4',
        material: ''
    },
    {
        number: 7,
        school: 'Мобильный дизайн',
        lecture: 'Идея, исследование, концепт (Часть 1)',
        lector: {
            id: 5,
            name: 'Антон Тен',
            src: 'https://avatars.mds.yandex.net/get-yaevents/204268/07bb5f8ab6dc11e687ef002590c62a5c/big',
            description: 'В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.'
        },
        date: '01.07.2017',
        location: 'Аудитория 7',
        material: {
            id: 3,
            name: 'Материалы',
            src: 'https://events.yandex.ru/lib/talks/4162/'
        }
    },
    {
        number: 8,
        school: 'Мобильный дизайн',
        lecture: 'Идея, исследование, концепт (Часть 2)',
        lector: {
            id: 5,
            name: 'Антон Тен',
            src: 'https://avatars.mds.yandex.net/get-yaevents/204268/07bb5f8ab6dc11e687ef002590c62a5c/big',
            description: 'В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.'
        },
        date: '02.07.2017',
        location: 'Аудитория 7',
        material: ''
    },
    {
        number: 9,
        school: 'Мобильный дизайн',
        lecture: 'Особенности проектирования мобильных интерфейсов',
        lector: {
            id: 6,
            name: 'Васюнин Николай',
            src: 'https://avatars.mds.yandex.net/get-yaevents/194464/1c55b8d2b6dc11e687ef002590c62a5c/big',
            description: 'Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.'
        },
        date: '03.07.2017',
        location: 'Аудитория 8',
        material: ''
    },
    {
        number: 10,
        school: ['Разработка интерфейсов', 'Мобильная разработка', 'Мобильный дизайн'],
        lecture: 'Идея, исследование, концепт (Часть 2)',
        lector: {
            id: 5,
            name: 'Антон Тен',
            src: 'https://avatars.mds.yandex.net/get-yaevents/204268/07bb5f8ab6dc11e687ef002590c62a5c/big',
            description: 'В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.'
        },
        date: '04.07.2017',
        location: 'Аудитория 7',
        material: ''
    },
    {
        number: 11,
        school: ['Разработка интерфейсов', 'Мобильная разработка', 'Мобильный дизайн'],
        lecture: 'Особенности проектирования мобильных интерфейсов',
        lector: {
            id: 6,
            name: 'Васюнин Николай',
            src: 'https://avatars.mds.yandex.net/get-yaevents/194464/1c55b8d2b6dc11e687ef002590c62a5c/big',
            description: 'Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.'
        },
        date: '05.07.2017',
        location: 'Аудитория 8',
        material: ''
    }
];

export {
    lessons
};


