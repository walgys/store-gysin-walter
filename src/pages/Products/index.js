import React, { useContext, useEffect} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {appContext, productsContext} from '../../contexts'
import {endpoint, headers, useFetch} from '../../utils'
import Jumbo from '../../components/Jumbo'
import CreditAddModal from '../../components/CreditAddModal'
import Header from '../../containers/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const Products = () => {

    
    const {loading, creditAddModal, fetchProducts} = useContext(appContext)
    useEffect( () => { 
        fetchProducts(endpoint + '/products');
    }, [])

    return (
        <>
                <ToastContainer position={'bottom-right'} autoClose={3000}/>
                {creditAddModal && <CreditAddModal toast={toast}/>}
                {loading ? <p>Loading...</p> : <Header />}
                <Jumbo category={'ELECTRONICS'} />
                {loading ? <p>Loading...</p> : 
                    
                    <ProductsContainer />}
                </>  
        
        
    )
}

export default Products
