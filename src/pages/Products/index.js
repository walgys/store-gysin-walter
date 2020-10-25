import React, { useState, useEffect} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {productsContext} from '../../contexts'
import {endpoint, headers} from '../../utils'

function Products() {

    const [products, setProducts] = useState([])
 


    useEffect( () => { 
        const fetchData = async ()=>{
        const productsResult = await fetch(endpoint + '/products', headers)
        
        const productList = await productsResult.json()
        setProducts(productList)
        
    }
        fetchData();
    }, [])

    return (
        <productsContext.Provider value={{products: products}} >
            <ProductsContainer />
        </productsContext.Provider>
        
    )
}

export default Products
