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
    }
];
