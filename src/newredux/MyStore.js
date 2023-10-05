import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../newredux/MyProductSlice';
import MyCartReducer from '../newredux/MyCartSlice'

export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
  },
});
