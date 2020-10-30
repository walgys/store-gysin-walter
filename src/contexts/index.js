import {createContext} from 'react'

export const productsContext = createContext({
    products: [],
    fetchProducts: ()=>{}
})

export const appContext = createContext({
    user:{},
    fetchUser: ()=>{},
    creditAddModal: false,
    setCreditAddModal: ()=>{},
    actionModal: false,
    setActionModal: ()=>{},
})