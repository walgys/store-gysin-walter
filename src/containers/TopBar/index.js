import React from 'react'
import UserBar from '../../components/UserBar'
import styled from 'styled-components/macro'
import logo from '../../img/aerolab-logo.svg'
import {Link} from 'react-router-dom'

const Bar = styled.div`
display: flex;
justify-content: space-between;
`
const LogoImg = styled.img`

margin: 22px 0px 22px 42px;
width: 39px;
height: 36px;
`

const TopBar = () => {
    return (
        <Bar>
            <Link to={'/'} >
              <LogoImg src={logo} alt="logo" />  
            </Link>
            
            <UserBar />
        </Bar>
    )
}

export default TopBar
