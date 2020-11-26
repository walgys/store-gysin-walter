import React from 'react'
import ProductsIndex from '../../components/ProductsIndex'
import Filters from '../../components/Filters'
import Pagination from '../../components/Pagination'
import {NavigationBarStyled} from './styles/navigationbar'


const NavigationBar = (props) => {
    const {page, setPage, maxPage, children} = props
    return (
        <NavigationBarStyled>
            <ProductsIndex {...props} />
            {children}
            <Pagination page={page} setPage={setPage} maxPage={maxPage} />
        </NavigationBarStyled>
    )
}

const NavigationFilters = ({children, ...restProps}) => {
    
    return  <Filters>{children}</Filters>
}

NavigationBar.filters = NavigationFilters

export default NavigationBar
