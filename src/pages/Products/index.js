import React, { useContext, useEffect} from 'react'
import ProductsContainer from '../../containers/ProductsContainer';
import {appContext} from '../../contexts'
import {endpoint} from '../../utils'
import Jumbo from '../../components/Jumbo'



const Products = () => {

    
    const {loading, fetchProducts} = useContext(appContext)
    useEffect( () => { 
        fetchProducts(endpoint + '/products');
    },[])

    return (
        <>
                <Jumbo category={'ELECTRONICS'} />
                {loading ? <p>Loading...</p> : 
                    
                    <ProductsContainer />}
                </>  
        
        
    )
}

export default Products
