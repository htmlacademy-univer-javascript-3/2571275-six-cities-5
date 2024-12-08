import {useDispatch} from 'react-redux';
import {AppDispatch} from '../models/app-dispatch.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
