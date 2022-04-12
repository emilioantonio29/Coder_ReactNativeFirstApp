import {PRODUCTS} from '../../constants/products';

// TYPES
export const PRODUCT_TYPES = {
    PRODUCT_LIST: "PRODUCT_LIST",
    PRODUCT_ITEM: "PRODUCT_ITEM" // NO UTILIZADO
}

// ACTIONS
export const filteredProducts = (id) => ({
    type: PRODUCT_TYPES.PRODUCT_LIST,
    categoryId: id
})
export const selectedItem = (id) => ({
    type: PRODUCT_TYPES.PRODUCT_ITEM,
    productId: id
})

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selectedItem: null,
}

// REDUCER
const ProductReducer = (state, action) => {
    switch(action.type){
        case PRODUCT_TYPES.PRODUCT_LIST:
            const selectedCategory = PRODUCTS.filter(product => product.category == action.categoryId.payload)
            //console.log(selectedCategory)
            return {
                ...state, filteredProducts: selectedCategory, selectedItem: null,
            }
        default:
            return state = initialState
    }
}

export default ProductReducer;