import React from 'react'
import { ContainerStyled, ImageStyled } from './styles/cardskeleton'
import '../styles/index.css'
const CardSkeleton = () => {
    return (
        <ContainerStyled classname={"scc scc-card"}>
            <ImageStyled className={"ssc-square"} />
            <div className={"ssc-hr"} style={{margin: "30px 0px 27px 0px"}}/>
            <div className={"ssc w-100"} >
                <div className={"ssc-line w-60"} style={{height: "23px"}} />
                <div className={"ssc-line w-80"} style={{height: "23px", marginTop: "10px"}} />
            </div>
        </ContainerStyled>
    )
}

export default CardSkeleton
