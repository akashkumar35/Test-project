import { combineReducers } from 'redux';
import { AuthReducer } from './Authreducers';


const reducers = combineReducers({
   
   auth_store:AuthReducer,
   
});

export default reducers;
