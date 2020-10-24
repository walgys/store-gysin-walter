import React from 'react'
import coin from '../../icons/coin.svg'
import {CreditAmountPill} from './styles/creditamount'

function CreditAmount() {
    const creditsAmount = 6000
    return (    
        <CreditAmountPill>
            <h5>{creditsAmount}</h5>
            <img src={coin} alt="coin icon" />
        </CreditAmountPill>
    )
}

export default CreditAmount
