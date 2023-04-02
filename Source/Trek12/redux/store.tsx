import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './reducers/appReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    appReducer
  },
  middleware: [thunk]
},);

export default store;