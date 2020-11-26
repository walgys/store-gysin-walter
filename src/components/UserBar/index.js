import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserBarContainerStyled } from './styles/userbar'
import { appContext } from '../../contexts'
import CreditAmount from '../CreditAmount'


const UserBar = () => {
    const {user} = useContext(appContext)

    return (
        <UserBarContainerStyled>
            <Link className='userName' to={'/history'}>{user.name}</Link>
            <CreditAmount credits={user.points}/>
        </UserBarContainerStyled>
    )
}

export default UserBar
