import React from 'react'
import ProductsIndex from '../../components/ProductsIndex'
import PriceFilter from '../../components/PriceFilter'
import CategoryFilter from '../../components/CategoryFilter'
import Pagination from '../../components/Pagination'
import {NavigationBarStyled, NavigationContainerStyled} from './styles/navigationbar'


const NavigationBar = (props) => {
    const {page, setPage, maxPage, priceFilter, categoryFilter} = props
    return (
        <NavigationContainerStyled>
            <NavigationBarStyled>
            <ProductsIndex {...props} />
            {priceFilter && <PriceFilter />}
            <Pagination page={page} setPage={setPage} maxPage={maxPage} />
        </NavigationBarStyled>
        {categoryFilter && <CategoryFilter />}
        </NavigationContainerStyled>
        
    )
}

export default NavigationBar
