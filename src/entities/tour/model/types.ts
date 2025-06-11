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
    {
        id: '4',
        title: 'Рим',
        country: 'Италия',
        image: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/583665dc-c63e-4d7e-bdc4-c80bfad7756a/-/format/webp/-/resize/1300x/',
        price: '200000 KZT',
        startDate: '2025-07-01',
    },
    {
        id: '5',
        title: 'Бали',
        country: 'Индонезия',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rMpSPu5aNE95DdT--TRmui8DtuEa3UStpw&s',
        price: '200000 KZT',
        startDate: '2025-07-01',
    }
]