import React, { useContext } from 'react'
import styled from 'styled-components'
import { userContext } from '../../contexts'
import CreditAmount from '../CreditAmount'


const UserBarContainer = styled.div`
margin-left: auto;
display: inline-flex;
height: 80px;
margin-right: 42px;
align-items: center;
& h5{
    font-size: 1.7rem;
    color: grey;
    margin-right: 10px;
    font-weight: 500;
    padding-bottom: 2px;
}
`

function UserBar() {
    const {user} = useContext(userContext)
    

    return (
        <UserBarContainer>
            <h5>{user.name}</h5>
            <CreditAmount credits={user.points}/>
        </UserBarContainer>
    )
}

export default UserBar
