import React from 'react'
import {ProductIndexStyled} from './styles/pruductindex'

const ProductIndex = (props) => {
    return (
        <ProductIndexStyled>
            {`${props.start}-${props.end} of ${props.total} products`}
        </ProductIndexStyled>
    )
}

export default ProductIndex
