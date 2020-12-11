import React,{createContext, useContext, useState} from 'react'
import {FooterStyled, FlexContainerStyled, ContainerStyled, HistoryContainerStyled, CategoryStyled, TextStyled, ImageStyled, IconStyled, RedeemStyled, PriceStyled, RedeemButtonStyled, NotEnoughStyled} from './styles/card'
import buyBlueIcon from  '../../icons/buy-blue.svg'
import buyWhiteIcon from  '../../icons/buy-white2.svg'
import coin from '../../icons/coin.svg'

const cardContext = createContext({
    hovering: false,
    setHovering: (value)=>{}
})

export const Card = ({children, ...restProps}) => {
    const [hovering, setHovering] = useState(false)
    return (
        <cardContext.Provider value={{
            hovering: hovering,
            setHovering: setHovering,
        }} >
            {children}
        </cardContext.Provider>
        )
       
}

const Container = ({children, ...restProps}) => {
    const {setHovering} = useContext(cardContext)
    return (
    <ContainerStyled onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} {...restProps}>{children}</ContainerStyled>
    )
}

const HistoryContainer = ({children, ...restProps}) => {
    const {setHovering} = useContext(cardContext)
    return (
    <HistoryContainerStyled onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} {...restProps}>{children}</HistoryContainerStyled>
    )
}

const Category = ({children, ...restProps}) => {
    return (
    <CategoryStyled {...restProps}>{children}</CategoryStyled>
    )
}

const Redeem = ({children, ...restProps}) => {
    
    return <RedeemStyled {...restProps}>{children}</RedeemStyled>
}

const IconButton = ({children, ...restProps}) => {
    const {hovering} = useContext(cardContext)
    return (
        <IconStyled icon={hovering ? buyWhiteIcon : buyBlueIcon} {...restProps}>{children}</IconStyled>
    )
}
   
Card.Container = Container
Card.HistoryContainer = HistoryContainer
Card.Category = Category
Card.Redeem = Redeem
Card.IconButton = IconButton

Card.Text = ({children, ...restProps}) => {
    return (
        <TextStyled {...restProps}>{children}</TextStyled>
    )
}

Card.Image = ({src, alt, ...restProps}) => {
    return (
        <ImageStyled src={src} alt={alt} {...restProps} />
    )
}

Card.RedeemButton = ({children, ...restProps}) => {
    return (
        <RedeemButtonStyled {...restProps}>{children}</RedeemButtonStyled>
    )
}

Card.Price =  ({children, ...restProps}) => {
    return (
        <PriceStyled {...restProps}><h5>{children}</h5><img src={coin} alt={'coin'} /></PriceStyled>
    )
}

Card.notEnoughButton = ({children, ...restProps}) => {
    return (
        <NotEnoughStyled {...restProps}><h5>{`You need ${children}`}</h5><img src={coin} alt={'coin'} /></NotEnoughStyled>
    )
}

Card.FlexContainer = ({children, ...restProps}) => {
    return (
        <FlexContainerStyled {...restProps}>{children}</FlexContainerStyled>
    )
}

Card.Footer = ({children, ...restProps}) => {
    return (
        <FooterStyled {...restProps}>{children}</FooterStyled>
    )
}

