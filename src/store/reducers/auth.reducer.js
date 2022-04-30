import {URL_API, URL_AUTH_SIGNUP, URL_AUTH_SIGNIN} from '../../utils/database'

// TYPES
export const AUTH_TYPES = {
    SIGNUP: "SIGNUP",
    SIGNIN: "SIGNIN",
    SHOWLOADING: "SHOWLOADING",
    LOGOUT: "LOGOUT"
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

export const ShowLoading = (bool) => ({
    type: AUTH_TYPES.SHOWLOADING,
    loading: bool
})

export const LogOut = () => ({
    type: AUTH_TYPES.LOGOUT
})

const initialState = {
    token: null,
    userId: null,
    loading: false,
    responseError: null
}   

// VALIDATORS
const login = (formValues) => {
    initialState.userId=formValues.user
    initialState.token=formValues.token
}

const register = async (formValues) => {
    const email = formValues.email;
    const password = formValues.password;

    fetch(`${URL_AUTH_SIGNUP}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, returnSecureToken: true})
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        data.error ? initialState.responseError = data.error : 
        data.idToken ? (initialState.token = data.idToken, initialState.userId = data.email) : console.log("Respuesta inesperada")
        //console.log(data.error.message)
        // initialState.token = data.idToken
        // initialState.userId = data.email
        // initialState.responseError = data
        //console.log(initialState.response)
    })
    .catch((err)=>{
        alert("error")
    })

   /* try {
        const response = await fetch(`${URL_AUTH_SIGNUP}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, returnSecureToken: true})
        })
        const result = await response.json();
        // initialState.token = result.idToken
        // initialState.userId = result.email
        // console.log(result)
        // console.log(result.error.message)
        // alert(`Registro Exitoso`)
    } catch (error) {
        alert("Error al intentar registrarse")
    }*/


    //initialState.showLoading = (!initialState.showLoading)
}


// REDUCER
const AuthReducer = async (state, action) => {
    switch(action.type){
        case AUTH_TYPES.SIGNUP:

            // WIPE STATE
            initialState.token=null,
            initialState.userId=null,
            initialState.loading= false,
            initialState.responseError= null
            await register(action.formValues.payload)

            return state
        case AUTH_TYPES.SIGNIN:
            //console.log(action.formValues.payload)
            //console.log(action.formValues.payload)
            //console.log("action",action)
            login(action.formValues.payload)
            //console.log(state)
            //console.log(initialState)
            //await login(action.loading.payload)
            return state
        case AUTH_TYPES.LOGOUT:
                //console.log(action.formValues.payload)
                //console.log(action.formValues.payload)
            initialState.userId = null
            initialState.idToken = null
                //console.log(action)
                //await login(action.loading.payload)
            return state
        default:
            return state = initialState;
    }
}

export default AuthReducer;