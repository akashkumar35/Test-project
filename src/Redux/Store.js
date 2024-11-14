import { createStore, applyMiddleware } from "redux";
 
import reducers from "./Reducers/Combine";
import storage from 'redux-persist/lib/storage'; 

import { persistReducer,persistStore } from 'redux-persist';
import { thunk } from "redux-thunk";


const persistConfig = {
    key: 'persist-key', 
    storage, 
  };
const persistedReducer = persistReducer(persistConfig,reducers)
const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store)


export default store ;
export {persistor};
