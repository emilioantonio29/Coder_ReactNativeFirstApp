import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/product.reducer';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import LoadingReducer from './reducers/loading.reducer';

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    auth: AuthReducer,
    loading: LoadingReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));