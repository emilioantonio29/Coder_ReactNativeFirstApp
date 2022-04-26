import {URL_API, URL_AUTH_SIGNUP, URL_AUTH_SIGNIN} from '../../utils/database'

// TYPES
export const AUTH_TYPES = {
    SIGNUP: "SIGNUP",
    SIGNIN: "SIGNIN",
}

// ACTIONS
export const AuthSignUp = (formValues) => ({
    type: AUTH_TYPES.SIGNUP,
    formValues: formValues
})

export const AuthSignIn = (formValues) => ({
    type: AUTH_TYPES.SIGNIN,
    formValues: formValues
})

const initialState = {
    token: null,
    userId: null,
    showLoading: null
}   

// VALIDATORS
const login = (formValues) => {

}
const register = async (formValues) => {
    const email = formValues.email;
    const password = formValues.password;
    /*fetch(`${URL_AUTH_SIGNUP}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, returnSecureToken: true})
    })
    .then((res)=>{
        console.log(res.json())
    })
    .catch((err)=>{
        alert("error")
    })*/

    try {
        const response = await fetch(`${URL_AUTH_SIGNUP}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, returnSecureToken: true})
        })
        const result = await response.json();
        console.log(result)
        alert(`Registro Exitoso`)
    } catch (error) {
        alert("Error al intentar registrarse")
    }

}


// REDUCER
const AuthReducer = (state, action) => {
    switch(action.type){
        case AUTH_TYPES.SIGNUP:
            //initialState.showLoading = true
            setTimeout(() => {
                register(action.formValues.payload)
            }, 3000);
            //register(action.formValues.payload)
            //console.log(action.formValues.payload)

            return {
                ...state, showLoading:false
            }
        case AUTH_TYPES.SIGNIN:
            console.log(action.formValues.payload)
            console.log(action.formValues.payload)
            return {
                ...state,
            }
        default:
            return state = initialState;
    }
}

export default AuthReducer;