// slices/index.js
import { combineReducers } from 'redux';
import batteriesReducer from './batteriesSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
    batteries: batteriesReducer,
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;
