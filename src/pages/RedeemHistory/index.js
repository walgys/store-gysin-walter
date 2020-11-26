import React, { useEffect, useContext } from 'react'
import  HistoryContainer from '../../containers/HistoryContainer/'
import { appContext } from '../../contexts'
import { endpoint } from '../../utils'



const RedeemHistory = () => {
    const {fetchHistory} = useContext(appContext)
    useEffect(() => {
        fetchHistory(endpoint + '/user/history')
    })
    
    return (
        <HistoryContainer />
    )
}

export default RedeemHistory
