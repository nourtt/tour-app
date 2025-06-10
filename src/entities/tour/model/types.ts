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
        price: '250000 KZT',
        startDate: '2025-07-01',
    },
    {
        id: '2',
        title: 'Дубай',
        country: 'ОАЭ',
        price: '235000 KZT',
        startDate: '2025-07-01',
    },
    {
        id: '3',
        title: 'Пхукет',
        country: 'Таиланд',
        price: '225000 KZT',
        startDate: '2025-07-01',
    },
]