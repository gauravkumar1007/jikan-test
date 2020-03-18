// import * as actions from "./action";
// import * as middlewares from "./middleware"
import {fetchData} from "./middleware/data";
import * as reducers from "./reducer"
import { createStore, applyMiddleware, combineReducers } from 'redux';

const Store = createStore(combineReducers({...reducers}),applyMiddleware(fetchData));

export default Store;