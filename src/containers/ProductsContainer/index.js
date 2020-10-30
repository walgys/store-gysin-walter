import React, {useContext} from 'react'
import {Card} from '../../components/Card'
import {ProductsContainer} from './styles/productcontainer'
import {productsContext, appContext} from '../../contexts'
import NavigationBar from '../NavigationBar'



function Products() {
    const { products } = useContext(productsContext)
    const { user } = useContext(appContext)
    const credits = user.points
    
    return (
        <>
        <NavigationBar />
        <ProductsContainer>
            {products.slice(0,16).map(product=>{
                const iconButton = <Card.IconButton onClick={()=>console.log('Redeem')}></Card.IconButton>
                const notEnoughButton = <Card.notEnoughButton onClick={()=>console.log('Add Credits')}>{product.cost - credits}</Card.notEnoughButton>
                const redeemButton = <Card.RedeemButton onClick={()=>console.log('Redeem')}>Redeem Now</Card.RedeemButton>
                const addCreditsButton = <Card.RedeemButton onClick={()=>console.log('Add Credits')}>Add More Credits</Card.RedeemButton>
                return(
                    <Card key={product._id}>    
                        <Card.Image src={product.img.url}></Card.Image>
                        <Card.Category>{product.category}</Card.Category>
                        <Card.Text>{product.name}</Card.Text>
                        {parseInt(credits) >= parseInt(product.cost) ? iconButton : notEnoughButton }
                        <Card.Redeem>
                            <Card.Price>{product.cost}</Card.Price>
                            {parseInt(credits) >= parseInt(product.cost) ? redeemButton : addCreditsButton }
                        </Card.Redeem>
                    </Card>
                )
            })}
            
            

        </ProductsContainer>
        </>
    )
}

export default Products
