import React from 'react'
import styled from 'styled-components'
import headerImg from '../../img/header-x2.png'


const Jumbotron = styled.div`
    width: 100%;
    max-width: 1440px;
    height: auto;
    max-height: 412px;
    position: relative;
    & img{
        width: 100%;
        max-width: 1440px;
        max-height: 412px;
        
    }
    & h1{
        font-family: 'Source Sans Pro', sans-serif; 
        color: white;
        position: absolute;
        font-size: 3rem;
        font-weight: 700;    
        bottom: 10%;
        left: 10%;

`

function Jumbo() {
    return (
        <Jumbotron >
            <img src={headerImg} alt="Jumbo" />
            <h1>ELECTRONICS</h1>
        </Jumbotron>
    )
}

export default Jumbo
