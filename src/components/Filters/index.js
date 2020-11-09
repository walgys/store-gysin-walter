import React from 'react'
import { FiltersStyled } from './styles/filters'


const Filters = (props) => {
    return (
        <FiltersStyled>
            {props.children}
        </FiltersStyled>
    )
}

export default Filters
