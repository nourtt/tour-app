import {isValidPhoneNumber} from 'libphonenumber-js';
import validator from 'validator';

export const validateForm = (form: {name: string; phone: string; email: string}): string | null => {
    if (!form.name.trim()) return 'Укажите имя';
    if (!form.phone.trim()) return 'Укажите телефон';
    if (!isValidPhoneNumber(form.phone, 'KZ')) return 'Некорректный номер телефона'

    if (!validator.isEmail(form.email)) return 'Некорректный email';

    return null;
}