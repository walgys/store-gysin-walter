import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../contexts'
import coin from '../../icons/coin.svg'
import {CreditAmountPill} from './styles/creditamount'

const CreditAmount = (props) => {
    const {credits} = props
    const {setCreditAddModal} = useContext(appContext)

    return (    
        <CreditAmountPill onClick={()=>setCreditAddModal(true)}>
            <h5>{credits}</h5>
            <img src={coin} alt="coin icon" />
        </CreditAmountPill>
    )
}

export default CreditAmount
