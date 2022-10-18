import {createStore, combineReducers} from 'redux';
import authReducer from '../reducers/authReducer';

const reducer = combineReducers({
    auth:authReducer
})
const store = createStore(reducer)
export default store;