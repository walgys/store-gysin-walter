import React, { useState, useEffect} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {productsContext} from '../../contexts'
import {endpoint, headers, useFetch} from '../../utils'
import Jumbo from '../../components/Jumbo'

function Products() {

    const [products, fetchProducts] = useFetch([])

    useEffect( () => { 
        fetchProducts(endpoint + '/products', headers);
    }, [])

    return (
        <productsContext.Provider value={{products: products}} >
            <Jumbo category={'ELECTRONICS'} />
            <ProductsContainer />
        </productsContext.Provider>
        
    )
}

export default Products
