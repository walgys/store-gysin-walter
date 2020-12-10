import React, {useContext} from 'react'
import {Card} from '../../components/Card'
import { HistoryContainer, PageContainer } from './styles/historycontainer'
import { appContext} from '../../contexts'
import NavigationBar from '../NavigationBar'
import { imgURL } from '../../utils'




const History = () => {
    const {
        setHistoryPageRange,
        historyPageRange,
        historyMaxPage,
        historyPage,
        setHistoryPage,
        setRedeemModal,
        filteredHistory,
        setProductId } = useContext(appContext)

   const onRedeemClick = (productId) => {
       setRedeemModal(true)
       setProductId(productId)
   }

   const replaceImgUrl = (url) => {
       let re = /.*(?=\/images)/
       return url.replace(re, imgURL)
        
   }

    
   
 
   return (
       <PageContainer>
       <NavigationBar
           setPageRange={setHistoryPageRange}
           start={historyPageRange.start}
           end={historyPageRange.end}
           total={filteredHistory.length}
           maxPage={historyMaxPage}
           page={historyPage} 
           setPage={setHistoryPage}
        />
       <HistoryContainer>
           {filteredHistory.slice(historyPageRange.start, historyPageRange.end).map(product=>{
               const redeemButton = <Card.RedeemButton onClick={()=>onRedeemClick(product._id)}>Redeem Again</Card.RedeemButton>
               return(
                   <Card key={product.createDate + product._id}>
                       <Card.HistoryContainer>
                           <Card.Image src={replaceImgUrl(product.img.url)}></Card.Image>
                           <Card.Category>{product.category}</Card.Category>
                           <Card.Text>{product.name}</Card.Text>
                           
                               <Card.Price>{product.cost}</Card.Price>
                               {redeemButton}
                       </Card.HistoryContainer>   
                       
                   </Card>
               )
           })}
           
           

       </HistoryContainer>
       </PageContainer>
   )
}

export default History