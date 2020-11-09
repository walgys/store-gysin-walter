import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../contexts'
import { FilterPriceButton, FilterPriceStyled } from './styles/pricefilter'
import { orderByPrice } from '../../utils'
import { useState } from 'react'

const PriceFilter = () => {
    const [buttonActive, setButtonActive] = useState('Higher')
    const {setProductsFilters} = useContext(appContext)

    const onClick = (buttonType) => {
        if (buttonType === 'Lower') setProductsFilters(prevState => {
            const newState = prevState.map(filter => filter.filterName === 'orderByPrice' ? {...filter, filter: orderByPrice, filterName: 'orderByPrice', params: {order: 'Ascendant'}} : filter)
            setButtonActive('Lower')
            return newState
        })
        if (buttonType === 'Higher') setProductsFilters(prevState => {
            const newState = prevState.map(filter => filter.filterName === 'orderByPrice' ? {...filter, filter: orderByPrice, filterName: 'orderByPrice', params: {order: 'Descendant'}} : filter)
            setButtonActive('Higher')
            return newState
        })
    }

    const higherButtonActive = <FilterPriceButton active>Higher Price</FilterPriceButton>
    const higherButton = <FilterPriceButton onClick={()=> onClick('Higher')}>Higher Price</FilterPriceButton>
    const lowerButtonActive = <FilterPriceButton active>Lower Price</FilterPriceButton>
    const lowerButton = <FilterPriceButton onClick={() => onClick('Lower')}>Lower Price</FilterPriceButton>

    return (
        <FilterPriceStyled>
            {buttonActive === 'Higher' ? higherButtonActive : higherButton}
            {buttonActive === 'Lower' ? lowerButtonActive : lowerButton}
        </FilterPriceStyled>
    )
}

export default PriceFilter
