import React, { useContext, useEffect, useCallback} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {appContext} from '../../contexts'
import {endpoint} from '../../utils'
import Jumbo from '../../components/Jumbo'



const Products = () => {

    
    const {productsLoading, fetchProducts} = useContext(appContext)
    const doFetch = useCallback(() => {
           return fetchProducts(endpoint + '/products');
        },[fetchProducts])
    useEffect( () => {
        

        doFetch();
        
    })

    return (
        <>
                <Jumbo category={'ELECTRONICS'} />  
                    <ProductsContainer loading={productsLoading} />
                </>  
        
        
    )
}

export default Products
