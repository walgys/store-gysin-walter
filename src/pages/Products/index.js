import React, { useContext, useEffect} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {appContext} from '../../contexts'
import {endpoint} from '../../utils'
import Jumbo from '../../components/Jumbo'



const Products = () => {

    
    const {productsLoading, fetchProducts} = useContext(appContext)
    useEffect( () => { 
        fetchProducts(endpoint + '/products');
    },[])

    return (
        <>
                <Jumbo category={'ELECTRONICS'} />  
                    <ProductsContainer loading={productsLoading} />
                </>  
        
        
    )
}

export default Products
