import React from 'react'
import { Jumbotron } from './style/jumbo'
import headerImg from '../../img/header-x2.png'





const Jumbo = (props) => {
    return (
        <Jumbotron >
            <img src={headerImg} alt="Jumbo" />
            <h1>{props.category}</h1>
        </Jumbotron>
    )
}

export default Jumbo
