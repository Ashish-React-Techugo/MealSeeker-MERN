import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer';

const reducer = combineReducers({
    auth:authReducer
})
const store = createStore(reducer,compose(applyMiddleware(thunk)))
export default store;