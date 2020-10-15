import React from 'react'
import styled from 'styled-components'
import coin from '../../icons/coin.svg'

const CreditAmountPill = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 104px;
    width: auto;
    background: lightgrey;
    height: 48px;
    margin: 5px;
    padding: 3px;
    border-radius: 25px;
    & h5{
        margin-left: 5px;
        padding-left: 5px;
    }
    
    & img{
        padding-top: 5px;
        margin-right: 5px;
    }
`

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
