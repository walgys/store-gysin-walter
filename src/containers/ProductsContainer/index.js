import React from 'react'
import {Card} from '../../components/Card'
import {ProductsContainer} from './styles/productcontainer'
import productImage from '../../img/iPhone8-x1.png'



function Products() {
    return (
        <ProductsContainer>
            <Card>    
                <Card.Image src={productImage}></Card.Image>
                <Card.Category>El Título</Card.Category>
                <Card.Text>Hola</Card.Text>
                <Card.IconButton onClick={()=>console.log('Click')}></Card.IconButton>
                <Card.Redeem>
                    <Card.Price>12.000</Card.Price>
                    <Card.RedeemButton onClick={()=>console.log('Click')}>Redeem Now</Card.RedeemButton>
                </Card.Redeem>
            </Card>
            

        </ProductsContainer>
    )
}

export default Products
