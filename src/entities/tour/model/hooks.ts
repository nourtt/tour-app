import { type Tour, mockTours } from "./types";
//Кастомный хук для получения туров
export const useTours = (): Tour[] => {
    return mockTours;
};