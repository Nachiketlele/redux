import { legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import { counterreducer } from "./counter.reducer"
import { todoreducer } from "./todo.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
    counter: counterreducer,
    todo: todoreducer,
})


export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware()))