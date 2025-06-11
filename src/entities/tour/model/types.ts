export type Tour = {
    id: string;
    title: string;
    country: string;
    image?: string;
    price: string;
    startDate: string;
};

//Заглушка данных
export const mockTours: Tour[] = [
    {
        id: '1',
        title: 'Анталья',
        country: 'Турция',
        image: 'https://horosho-tam.ru/thumb/1600/pics/a2/13/59a852cd0b3ec54050d913a2/antalya-gorod-istoricheskih-p-13a2.jpg',
        price: '250000 KZT',
        startDate: '2025-07-01',
    },
    {
        id: '2',
        title: 'Дубай',
        country: 'ОАЭ',
        image: 'https://happy-travel.kz/upload/userfiles/images/dubai-iz-shymkenta.jpg',
        price: '235000 KZT',
        startDate: '2025-07-01',
    },
    {
        id: '3',
        title: 'Пхукет',
        country: 'Таиланд',
        image: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/b6e144d4227e16811a694a7a5b4dc5db/',
        price: '225000 KZT',
        startDate: '2025-07-01',
    },
]