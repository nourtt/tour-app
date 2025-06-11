import {isValidPhoneNumber} from 'libphonenumber-js';


export const validateForm = (form: {name: string; phone: string; email: string}): string | null => {
    if (!form.name.trim()) return 'Укажите имя';
    if (!form.phone.trim()) return 'Укажите телефон';
    if (!isValidPhoneNumber(form.phone, 'KZ')) return 'Некорректный номер телефона'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //для проверки валидности введенного имейла
    if (!emailRegex.test(form.email)) return 'Некорректный email';

    return null;
}