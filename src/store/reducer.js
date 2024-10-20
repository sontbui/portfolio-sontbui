import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import customization from './customizationReducer';
import customizationReducer from './customizationReducer';


const reducer = combineReducers({
    customization: customizationReducer,
});
const store = configureStore({ reducer: reducer });

export default reducer;