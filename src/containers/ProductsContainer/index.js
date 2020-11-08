import React, {useContext} from 'react'
import {Card} from '../../components/Card'
import {ProductsContainer} from './styles/productcontainer'
import { appContext} from '../../contexts'
import NavigationBar from '../NavigationBar'




const Products = () => {
    const {
         products,
         setPageRange,
         pageRange,
         maxPage,
         credits,
         setCreditAddModal,
         setRedeemModal,
         setProductId } = useContext(appContext)
    const onRedeemClick = (productId) => {
        setRedeemModal(true)
        setProductId(productId)
    }
  
    return (
        <>
        <NavigationBar
            setPageRange={setPageRange}
            start={pageRange.start}
            end={pageRange.end}
            total={products.length}
            maxPage={maxPage}
         />
        <ProductsContainer>
            {products.slice(pageRange.start, pageRange.end).map(product=>{
                const iconButton = <Card.IconButton onClick={()=>onRedeemClick(product._id)}></Card.IconButton>
                const notEnoughButton = <Card.notEnoughButton onClick={()=>setCreditAddModal(true)}>{product.cost - credits}</Card.notEnoughButton>
                const redeemButton = <Card.RedeemButton onClick={()=>onRedeemClick(product._id)}>Redeem Now</Card.RedeemButton>
                const addCreditsButton = <Card.RedeemButton onClick={()=>setCreditAddModal(true)}>Add More Credits</Card.RedeemButton>
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
