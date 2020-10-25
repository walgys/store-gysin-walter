import React from 'react'
import coin from '../../icons/coin.svg'
import {CreditAmountPill} from './styles/creditamount'

function CreditAmount(props) {
    const {credits} = props
    return (    
        <CreditAmountPill>
            <h5>{credits}</h5>
            <img src={coin} alt="coin icon" />
        </CreditAmountPill>
    )
}

export default CreditAmount
