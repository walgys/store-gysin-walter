import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { appContext } from '../../contexts'
import CreditAmount from '../CreditAmount'

const UserBarContainer = styled.div`
margin-left: auto;
display: inline-flex;
height: 80px;
margin-right: 42px;
align-items: center;
-webkit-touch-callout: none; 
-webkit-user-select: none; 
-khtml-user-select: none; 
-moz-user-select: none; 
-ms-user-select: none; 
user-select: none; 
.userName, h5{
    font-size: 1.7rem;
    color: grey;
    text-decoration: none;
    margin-right: 10px;
    font-weight: 500;
    padding-bottom: 2px;
}
`

const UserBar = () => {
    const {user} = useContext(appContext)

    return (
        <UserBarContainer>
            <Link className='userName' to={'/history'}>{user.name}</Link>
            <CreditAmount credits={user.points}/>
        </UserBarContainer>
    )
}

export default UserBar
