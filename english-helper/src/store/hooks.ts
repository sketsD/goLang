import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./index";

type DispatchFunction = () => AppDispatch;
export const useUserDispatch: DispatchFunction = useDispatch;
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;
