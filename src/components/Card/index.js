import React,{createContext, useContext, useState} from 'react'
import {ContainerStyled, CategoryStyled, TextStyled, ImageStyled, IconStyled, RedeemStyled, PriceStyled, RedeemButtonStyled} from './styles/card'
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
            <ContainerStyled onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} {...restProps}>{children}</ContainerStyled>
        </cardContext.Provider>
        )
       
}

const Category = ({children, ...restProps}) => {
    const {hovering} = useContext(cardContext)
    return (
    <CategoryStyled hovering={hovering} {...restProps}>{children}</CategoryStyled>
    )
}

const Redeem = ({children, ...restProps}) => {
    const {hovering, setHovering} = useContext(cardContext)
    return <RedeemStyled {...restProps}>{children}</RedeemStyled>
}

const IconButton = ({children, ...restProps}) => {
    const {hovering, setHovering} = useContext(cardContext)
    return (
        <IconStyled icon={hovering ? buyWhiteIcon : buyBlueIcon} {...restProps}>{children}</IconStyled>
    )
}   

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
