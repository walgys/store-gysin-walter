import React, {useContext} from 'react'
import {Card} from '../../components/Card'
import { HistoryContainer} from './styles/historycontainer'
import { appContext} from '../../contexts'
import NavigationBar from '../NavigationBar'
import { imgURL } from '../../utils'
import CardSkeleton from '../../components/Skeletons/CardSkeleton'
import * as dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import Footer from '../Footer'



const History = (props) => {
    dayjs.extend(LocalizedFormat)

    const {
        setHistoryPageRange,
        historyPageRange,
        historyMaxPage,
        historyPage,
        setHistoryPage,
        filteredHistory} = useContext(appContext)
   

   const replaceImgUrl = (url) => {
       let re = /.*(?=\/images)/
       return url.replace(re, imgURL)
        
   }

    
   
 
   return (
       <>
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
           {props.loading ? [...Array(16)].map((card, idx) => <CardSkeleton width={'300px'} key={idx} />) : filteredHistory.slice(historyPageRange.start, historyPageRange.end).map(product=>{
               return(
                   <Card key={product.createDate + product._id}>
                       <Card.Container width={'300px'}>
                            <Card.FlexContainer justifyContent={'center'}>
                            <Card.Image src={replaceImgUrl(product.img.url)}></Card.Image>
                            </Card.FlexContainer>
                            <Card.Footer>
                                <Card.FlexContainer flexDirection={'column'}>
                                    <Card.Category paddingTop={'10px'} fontSize={'14px'}>{product.category}</Card.Category>
                                    <Card.Text fontSize={'16px'}>{product.name}</Card.Text>
                                    <Card.Category paddingTop={'10px'}  fontSize={'14px'}>Redeemed On</Card.Category>                                
                                    <Card.Text fontSize={'16px'}>{dayjs(product.createDate).format('LLLL')}</Card.Text>
                                </Card.FlexContainer>
                            </Card.Footer>
                            
                            
                       </Card.Container>   
                       
                   </Card>
               )
           })}
           
           

       </HistoryContainer>
       <Footer>
       <NavigationBar
           setPageRange={setHistoryPageRange}
           start={historyPageRange.start}
           end={historyPageRange.end}
           total={filteredHistory.length}
           maxPage={historyMaxPage}
           page={historyPage} 
           setPage={setHistoryPage}
        />
        </Footer>
       </>
   )
}

export default History