import React, { useContext, useEffect} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {appContext} from '../../contexts'
import {endpoint} from '../../utils'
import Jumbo from '../../components/Jumbo'



const Products = () => {

    
    const {productsLoading, fetchProducts} = useContext(appContext)
    const useMountEffect = (fun) => useEffect(fun, [])
    const doFetch = () => {
        fetchProducts(endpoint + '/products');
        }

    useMountEffect(doFetch)

    return (
        <>
                <Jumbo category={'ELECTRONICS'} />  
                    <ProductsContainer loading={productsLoading} />
                </>  
        
        
    )
}

export default Products
