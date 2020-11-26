import React from 'react'

import TopBar from '../TopBar'
import {HeaderStyled} from './styles/header'

const Header = (props) => {
    return (
        <HeaderStyled>
        <TopBar loading={props.loading} />
        
        </HeaderStyled>
    )
}

export default Header
