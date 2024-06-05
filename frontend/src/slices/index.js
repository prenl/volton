// slices/index.js
import { combineReducers } from 'redux';
import batteriesReducer from './batteriesSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    batteries: batteriesReducer,
    cart: cartReducer,
});

export default rootReducer;
