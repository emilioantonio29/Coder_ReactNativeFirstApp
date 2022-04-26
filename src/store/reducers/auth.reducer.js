import {URL_API, URL_AUTH_SIGNUP, URL_AUTH_SIGNIN} from '../../utils/database'

// TYPES
export const AUTH_TYPES = {
    SIGNUP: "SIGNUP",
    SIGNIN: "SIGNIN",
}

// ACTIONS
export const AuthSignIn = () => ({
    
})

export const AuthSignUp = (email, password) => ({

})


const initialState = {
    token: null,
    userId: null,
}

// VALIDATOR


// REDUCER
const AuthReducer = (state, action) => {
    switch(action.type){
        case AUTH_TYPES.SIGNIN:
            return {
                ...state,
            }
        default:
            return state = initialState;
    }
}

export default AuthReducer;