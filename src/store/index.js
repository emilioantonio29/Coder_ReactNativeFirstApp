import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/product.reducer';

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));