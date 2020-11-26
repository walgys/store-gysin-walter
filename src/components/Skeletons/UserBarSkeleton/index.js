import React from 'react'
import { UserBarSkeletonStyled } from './styles/userbarskeleton'
import '../styles/index.css'

const UserBarSkeleton = () => {
    return (
        <UserBarSkeletonStyled className={"ssc w-100"}>
               <div className={"ssc-square name"} /> 
               <div className={"ssc-line points"}  />
            
        </UserBarSkeletonStyled>
    )
}

export default UserBarSkeleton
