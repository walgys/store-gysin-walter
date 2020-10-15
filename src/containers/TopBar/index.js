import React from 'react'
import UserBar from '../../components/UserBar'
import styled from 'styled-components'
import logo from '../../img/aerolab-logo.svg'

const Bar = styled.div`
display: flex;
justify-content: space-between;
`
const LogoImg = styled.img`

margin: 22px 0px 22px 42px;
width: 39px;
height: 36px;
`

function TopBar() {
    return (
        <Bar>
            <LogoImg src={logo} alt="logo" />
            <UserBar />
        </Bar>
    )
}

export default TopBar
