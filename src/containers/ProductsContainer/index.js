import React, {useContext} from 'react'
import {Card} from '../../components/Card'
import {ProductsContainer} from './styles/productcontainer'
import {productsContext} from '../../contexts'



function Products() {
    const { products } = useContext(productsContext)
    return (
        <ProductsContainer>
            {products.slice(0,16).map(product=>{
                
                return(
                    <Card key={product._id}>    
                        <Card.Image src={product.img.url}></Card.Image>
                        <Card.Category>{product.category}</Card.Category>
                        <Card.Text>{product.name}</Card.Text>
                        <Card.IconButton onClick={()=>console.log('Click')}></Card.IconButton>
                        <Card.Redeem>
                        <Card.Price>{product.cost}</Card.Price>
                        <Card.RedeemButton onClick={()=>console.log('Click')}>Redeem Now</Card.RedeemButton>
                        </Card.Redeem>
                    </Card>
                )
            })}
            
            

        </ProductsContainer>
    )
}

export default Products
