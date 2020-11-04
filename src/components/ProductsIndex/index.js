import React from 'react'
import {ProductIndexStyled} from './styles/pruductindex'

const ProductIndex = (props) => {
    return (
        <ProductIndexStyled>
            {`${props.start} of ${props.end} products`}
        </ProductIndexStyled>
    )
}

export default ProductIndex
