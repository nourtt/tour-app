//Типизированные хуки
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;