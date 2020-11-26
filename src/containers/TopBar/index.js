import React from 'react'
import UserBar from '../../components/UserBar'
import logo from '../../img/aerolab-logo.svg'
import {Link} from 'react-router-dom'
import { Bar, LogoImg } from './styles/TopBar'
import UserBarSkeleton from '../../components/Skeletons/UserBarSkeleton'


const TopBar = (props) => {
    return (
        <Bar>
            <Link to={'/'} >
              <LogoImg src={logo} alt="logo" />  
            </Link>
            
            {props.loading ? <UserBarSkeleton /> : <UserBar />}
        </Bar>
    )
}

export default TopBar
