import React from 'react'
import ProductsIndex from '../../components/ProductsIndex'
import Filters from '../../components/Filters'
import Pagination from '../../components/Pagination'
import {NavigationBarStyled} from './styles/navigationbar'


function NavigationBar() {
    return (
        <NavigationBarStyled>
            <ProductsIndex />
            <Filters />
            <Pagination />
        </NavigationBarStyled>
    )
}

export default NavigationBar
