import React, {useContext} from 'react'
import {Card} from '../../components/Card'
import {ProductsContainer} from './styles/productcontainer'
import { appContext} from '../../contexts'
import NavigationBar from '../NavigationBar'
import PriceFilter from '../../components/PriceFilter'
import CategoryFilter from '../../components/CategoryFilter'
import CardSkeleton from '../../components/Skeletons/CardSkeleton'




const Products = (props) => {
    const {
         filteredProducts,
         setPageRange,
         pageRange,
         page,
         setPage,
         maxPage,
         credits,
         setCreditAddModal,
         setRedeemModal,
         setProductId,
         setProductName } = useContext(appContext)
    const onRedeemClick = (productId, productName) => {
        setRedeemModal(true)
        setProductId(productId)
        setProductName(productName)
    }
    return (
        <>
        <NavigationBar
            setPageRange={setPageRange}
            start={pageRange.start}
            end={pageRange.end}
            total={filteredProducts.length}
            maxPage={maxPage}
            page={page} 
            setPage={setPage}
         >
             <NavigationBar.filters>
                 <PriceFilter />
                 <CategoryFilter />
             </NavigationBar.filters>
         </NavigationBar>
        <ProductsContainer>
            {props.loading ? [...Array(16)].map(card => <CardSkeleton />) : filteredProducts.slice(pageRange.start, pageRange.end).map(product=>{
                const iconButton = <Card.IconButton onClick={()=>onRedeemClick(product._id, product.name)}></Card.IconButton>
                const notEnoughButton = <Card.notEnoughButton onClick={()=>setCreditAddModal(true)}>{product.cost - credits}</Card.notEnoughButton>
                const redeemButton = <Card.RedeemButton onClick={()=>onRedeemClick(product._id, product.name )}>Redeem Now</Card.RedeemButton>
                const addCreditsButton = <Card.RedeemButton onClick={()=>setCreditAddModal(true)}>Add More Credits</Card.RedeemButton>
                return(
                    <Card key={product._id}>
                        <Card.Container>
                            <Card.Image src={product.img.url}></Card.Image>
                            <Card.Category>{product.category}</Card.Category>
                            <Card.Text>{product.name}</Card.Text>
                            {parseInt(credits) >= parseInt(product.cost) ? iconButton : notEnoughButton }
                            <Card.Redeem>
                                <Card.Price>{product.cost}</Card.Price>
                                {parseInt(credits) >= parseInt(product.cost) ? redeemButton : addCreditsButton }
                            </Card.Redeem>
                        </Card.Container>   
                        
                    </Card>
                )
            })}
            
            

        </ProductsContainer>
        </>
    )
}

export default Products
