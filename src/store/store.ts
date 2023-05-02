import { createStore } from 'redux';
import { userReducer } from './tokens/TokensReducer';

const store = createStore(userReducer);

export default store;