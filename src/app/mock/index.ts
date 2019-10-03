export interface IElement {
    img: string,
    title: string,
    desc: string,
    price: number,
    location: {
        title: string,
        image: string,
        address: string,
        phone: number // дополнительно задание pipe для форматирования
    },
    info: {
        rate: number,
        favorites: number,
        recommendations: number,
        date: string
    },
    type: string
}

export const elements: IElement[] = [
    {
        img: 'assets/images/event-1.jpg',
        title: 'Про себя и вслух. Скульптурные высказывания о человеке',
        desc: 'Четыре десятка скульптур о чертах человеческого характера',
        price: 400,
        location: {
            title: 'Мастерская Аникушина',
            image: 'assets/images/location-1.jpg',
            address: 'Санкт-Петербург, Вяземский пер., 8',
            phone: 78123474930
        },
        info: {
            rate: 4,
            favorites: 8,
            recommendations: 9,
            date: 'до 31 октября'
        },
        type: 'Выставка'
    },
    {
        img: 'assets/images/event-2.jpg',
        title: 'Зинаида Серебрякова',
        desc: 'Женщина-модерн: 70 произведений из частных собраний',
        price: 700,
        location: {
            title: 'K Gallery',
            image: 'assets/images/location-2.jpg',
            address: 'Санкт-Петербург, наб. реки Фонтанки, 24',
            phone: 78122730056
        },
        info: {
            rate: 7.9,
            favorites: 89,
            recommendations: 71,
            date: 'до 3 ноября'
        },
        type: 'Выставка'
    },
    {
        img: 'assets/images/event-3.jpg',
        title: 'Лето одного года',
        desc: 'Четыре десятка скульптур о чертах человеческого характера',
        price: 4000,
        location: {
            title: 'БДТ им. Товстоногова',
            image: 'assets/images/location-3.png',
            address: 'Санкт-Петербург, наб. реки Фонтанки, 65',
            phone: 78122441071
        },
        info: {
            rate: 8.5,
            favorites: 80,
            recommendations: 56,
            date: '1 октября 2019 19:00'
        },
        type: 'Спектакль'
    },
    {
        img: 'assets/images/event-4.jpg',
        title: 'a-ha',
        desc: 'Четыре десятка скульптур о чертах человеческого характера',
        price: 3850,
        location: {
            title: 'Ледовый дворец',
            image: 'assets/images/location-4.jpg',
            address: 'Санкт-Петербург, просп. Пятилеток, 1',
            phone: 78127186620
        },
        info: {
            rate: 8,
            favorites: 788,
            recommendations: 1443,
            date: '20 ноября в 20:00'
        },
        type: 'Концерт'
    },
    {
        img: 'assets/images/event-5.jpg',
        title: 'Мельница',
        desc: 'Юбилейная программа к 20-летию группы',
        price: 1000,
        location: {
            title: 'БКЗ «Октябрьский»',
            image: 'assets/images/location-5.jpg',
            address: 'Санкт-Петербург, Лиговский пр., 6',
            phone: 78122751300
        },
        info: {
            rate: 87,
            favorites: 788,
            recommendations: 444,
            date: '20 ноября в 20:00'
        },
        type: 'Концерт'
    },
    {
        img: 'assets/images/event-6.jpg',
        title: 'Александр Розенбаум',
        desc: '',
        price: 1000,
        location: {
            title: 'БКЗ «Октябрьский»',
            image: 'assets/images/location-5.jpg',
            address: 'Санкт-Петербург, Лиговский пр., 6',
            phone: 78122751300
        },
        info: {
            rate: 8.6,
            favorites: 986,
            recommendations: 554,
            date: '29 декабря, 19:00'
        },
        type: 'Концерт'
    },
    {
        img: 'assets/images/event-7.jpg',
        title: 'Тина Модотти: Искусство. Любовь. Революция',
        desc: 'Фотоавангард мексиканской художницы',
        price: 500,
        location: {
            title: 'Музейно-выставочный центр «Росфото»',
            image: 'assets/images/location-7.png',
            address: 'Санкт-Петербург, Б.Морская, 35',
            phone: 78123141214
        },
        info: {
            rate: 7,
            favorites: 457,
            recommendations: 96,
            date: 'до 17 ноября'
        },
        type: 'Выставка'
    },
    {
        img: 'assets/images/event-8.jpg',
        title: 'Макбет. Кино',
        desc: 'Сумасшедший театр Юрия Бутусова, петербургская версия',
        price: 1500,
        location: {
            title: 'Театр им. Ленсовета',
            image: 'assets/images/location-8.jpg',
            address: 'Санкт-Петербург, Владимирский просп., 12',
            phone: +78127132191
        },
        info: {
            rate: 7,
            favorites: 124,
            recommendations: 968,
            date: ''
        },
        type: 'Спектакль'
    },
    {
        img: 'assets/images/event-9.jpg',
        title: 'Константин Сомов',
        desc: 'Ретроспектива одного из главных участников «Мира искусства»',
        price: 700,
        location: {
            title: 'Михайловский замок',
            image: 'assets/images/location-9.jpg',
            address: 'Санкт-Петербург, Садовая, 2',
            phone: 78125705112
        },
        info: {
            rate: 8,
            favorites: 457,
            recommendations: 845,
            date: 'до 4 ноября'
        },
        type: 'Выставка'
    },
    {
        img: 'assets/images/event-10.jpg',
        title: 'Джокер',
        desc: 'Хоакин Феникс в серьезной драме про безумного шута Готэма',
        price: 350,
        location: {
            title: 'Кинотеатр Родина',
            image: 'assets/images/location-10.png',
            address: 'Санкт-Петербург, Караванная, 12',
            phone: 78125716131
        },
        info: {
            rate: 8.7,
            favorites: 478,
            recommendations: 457,
            date: '3 октября 2019'
        },
        type: 'Кино'
    }
];
