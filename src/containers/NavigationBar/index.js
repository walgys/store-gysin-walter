import React,{useContext} from 'react'
import ProductsIndex from '../../components/ProductsIndex'
import Filters from '../../components/Filters'
import Pagination from '../../components/Pagination'
import {NavigationBarStyled} from './styles/navigationbar'
import { appContext } from '../../contexts'


const NavigationBar = (props) => {
    const {page,setPage} = useContext(appContext)
    return (
        <NavigationBarStyled>
            <ProductsIndex {...props} />
            <Filters />
            <Pagination page={page} setPage={setPage} maxPage={props.maxPage} />
        </NavigationBarStyled>
    )
}

export default NavigationBar
