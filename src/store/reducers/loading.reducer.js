// TYPES
export const AUTH_TYPES = {
    SHOWLOADING: "SHOWLOADING"
}

// ACTIONS
export const ShowLoading = (bool) => ({
    type: AUTH_TYPES.SHOWLOADING,
    loading: bool
})

const initialState = {
    loading: false
}   

// VALIDATORS


// REDUCER
const LoadingReducer = async (state, action) => {
    switch(action.type){
        case AUTH_TYPES.SHOWLOADING:
            initialState.loading = action.loading.payload
            return {
                loading: initialState.loading
            }
        default:
            return state = initialState;
    }
}

export default LoadingReducer;