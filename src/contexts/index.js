import {createContext} from 'react'

export const appContext = createContext({
    user:{},
    fetchUser: ()=>{},
    creditAddModal: false,
    setCreditAddModal: ()=>{},
    actionModal: false,
    setActionModal: ()=>{},
    products: [],
    fetchProducts: ()=>{}
})