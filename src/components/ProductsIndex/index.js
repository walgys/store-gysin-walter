import React from 'react'
import {ProductIndexStyled} from './styles/pruductindex'

const ProductIndex = (props) => {
    return (
        <ProductIndexStyled>
            {`${props.start}-${props.end <= props.total ? props.end : props.total} of ${props.total} products`}
        </ProductIndexStyled>
    )
}

export default ProductIndex
