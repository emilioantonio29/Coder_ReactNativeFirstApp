import {PRODUCTS} from '../../constants/products';
import {URL_API} from '../../utils/database'

// TYPES
export const CART_TYPES = {
    CART_LIST: "CART_LIST",
    CART_DELETE_ITEM: "ELIMINAR ITEM",
    TEST: "TEST", 
    CONFIRM_CART: "CONFIRMAR LA COMPRA"
}

// ACTIONS
export const CartProducts = (productObj) => ({
    type: CART_TYPES.CART_LIST,
    product: productObj
})

export const CartDeleteProduct = (productObj) => ({
    type: CART_TYPES.CART_DELETE_ITEM,
    product: productObj
})

export const CartConfirm = () => ({
    type: CART_TYPES.CONFIRM_CART
})




const initialState = {
    cartList: [],
    totalPrice: [{totalPrice: null}],
}

// VALIDATOR
const checkCart = (product) => {
    //console.log(product)
    if(!initialState.cartList.length){
        initialState.cartList.push({...product, cant: 1, subtotal: product.price})
        initialState.totalPrice[0].totalPrice = product.price
    }else{
        let filteredIndex = initialState.cartList.findIndex(item => item.id === product.id)
        initialState.cartList.findIndex(item => item.id === product.id) == -1 ? 
        (initialState.cartList.push({...product, cant: 1, subtotal: product.price}),initialState.totalPrice[0].totalPrice= initialState.totalPrice[0].totalPrice+product.price)
        : 
        (initialState.cartList[filteredIndex].cant = initialState.cartList[filteredIndex].cant+1, 
         initialState.cartList[filteredIndex].subtotal = initialState.cartList[filteredIndex].subtotal+product.price,
         initialState.totalPrice[0].totalPrice= initialState.totalPrice[0].totalPrice+product.price)
    }
    console.log(initialState)
}

const deleteProduct = (product) => {
    console.log(initialState.cartList.length)
    let filteredItems = initialState.cartList.filter(item => item.id !== product.id)
    initialState.cartList = filteredItems
    initialState.totalPrice[0].totalPrice=initialState.totalPrice[0].totalPrice - product.subtotal

    //console.log(product)
}

const confirmCart = async () => {
    // fetch(`${URL_API}/cart.json`,{
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({date: Date.now(), items: initialState.cartList, total: initialState.totalPrice[0].totalPrice})
    // }).then((data)=>{
    //     console.warn(data.json())
    // }).catch((err)=>{
    //     alert("Error al confirmar la compra")
    // })

    try {
        const response = await fetch(`${URL_API}/cart.json`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({date: Date.now(), items: initialState.cartList, total: initialState.totalPrice[0].totalPrice})
        })

        const result = await response.json();
        console.log(result)
        initialState.cartList = []
        initialState.totalPrice[0].totalPrice=null
        alert(`Muchas gracias por su compra. Comprobante de pago: ${result.name}`)
    } catch (error) {
        alert("Error al confirmar la compra")
    }
}

// REDUCER
const CartReducer = (state, action) => {
    switch(action.type){
        case CART_TYPES.CART_LIST:

            checkCart(action.product.payload)

            return {
                ...state
            }
        case CART_TYPES.CART_DELETE_ITEM:

            deleteProduct(action.product.payload)

            return {
                ...state, cartList: initialState.cartList
            }
        case CART_TYPES.CONFIRM_CART:

            confirmCart()

            return state = initialState
        default:
            return state = initialState
    }
}

export default CartReducer;