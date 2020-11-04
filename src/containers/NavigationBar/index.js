import React,{useState} from 'react'
import ProductsIndex from '../../components/ProductsIndex'
import Filters from '../../components/Filters'
import Pagination from '../../components/Pagination'
import {NavigationBarStyled} from './styles/navigationbar'


const NavigationBar = (props) => {
    const [page, setPage] = useState(1)
    return (
        <NavigationBarStyled>
            <ProductsIndex start={props.start} end={props.end} />
            <Filters />
            <Pagination page={page} setPage={setPage} />
        </NavigationBarStyled>
    )
}

export default NavigationBar
