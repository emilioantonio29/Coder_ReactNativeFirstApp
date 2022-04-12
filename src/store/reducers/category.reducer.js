import {CATEGORIES} from '../../constants/categories';

// TYPES
export const CATEGORY_TYPES = {
    SELECT_CATEGORY: "SELECT_CATEGORY",
    TEST: "TEST"
}

const initialState = {
    categories: CATEGORIES,
    selectedCategory: null,
}

// ACTIONS
export const selectedCategory = (id) => ({
    type: CATEGORY_TYPES.SELECT_CATEGORY,
    categoryId: id
})

// REDUCER
const CategoryReducer = (state, action) => {
    switch(action.type){
        case CATEGORY_TYPES.SELECT_CATEGORY:
            //console.log(action.categoryId.payload)
            const indexCategory = state.categories.findIndex(cat => cat.id === action.categoryId.payload)
            //console.log(indexCategory)
            return {
                ...state, selectedCategory: state.categories[indexCategory]
            }
        default:
            return state = initialState
    }
}

export default CategoryReducer;