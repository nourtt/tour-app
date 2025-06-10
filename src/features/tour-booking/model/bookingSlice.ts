import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";
//Инициализация стейтов
interface BookingFormState {
    name: string;
    phone: string;
    email: string;
}

interface BookingState {
    selectedTourID: string | null;
    isModalOpen: boolean;
    form: BookingFormState;
}

const initialState: BookingState = {
    selectedTourID: null,
    isModalOpen: false,
    form: {
        name: '',
        phone: '',
        email: '',
    },
};
//Слайс
const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        /**
         * 
         * @param редьюсер для открытия модального окна брони
         * @param использует PayloadAction для сохранности типа
         */
        openModal: (state, action: PayloadAction<string>) => {
            state.selectedTourID = action.payload;
            state.isModalOpen = true;
        },
        /**
         * 
         * @param редьюсер для закрытия модального окна брони
         */
        closeModal: (state) => {
            state.isModalOpen = false;
            state.selectedTourID = null;
        },
        /**
         * 
         * @param редьюсер для обноваления формы
         * @param использует PayloadAction для сохранности типа
         */
        updateFormField: (
            state,
            action: PayloadAction<{field: keyof BookingFormState; value: string}>
        ) =>{
            const {field, value} = action.payload;
            state.form[field] = value;
        },
        /**
         * 
         * @param редьюсер для сброса формы
         */
        resetForm: (state) => {
            state.form = initialState.form;
        },
        /**
         * 
         * @param редьюсер для публикации формы
         */
        submitForm: (state) => {
            state.isModalOpen = false;
            state.selectedTourID = null;
            state.form = initialState.form;
        },
    },
});
export const selectBookingState = (state: RootState) => state.booking;
export const {openModal, closeModal, updateFormField, resetForm, submitForm } = bookingSlice.actions;
export default bookingSlice.reducer;