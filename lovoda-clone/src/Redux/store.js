import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer as auth} from './Auth/reducer';
import {reducer as newPage} from './NewPage/reducer'
import {reducer as allPage} from './Allpage/reducer'


const rootReducer = combineReducers({auth,newPage,allPage})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))