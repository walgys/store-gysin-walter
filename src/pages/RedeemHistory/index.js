import React, { useEffect, useContext, useCallback } from 'react'
import  HistoryContainer from '../../containers/HistoryContainer/'
import { appContext } from '../../contexts'
import { endpoint } from '../../utils'



const RedeemHistory = () => {
    const {fetchHistory} = useContext(appContext)
    const doFetch = useCallback(() => {
            fetchHistory(endpoint + '/user/history')
        },[fetchHistory])

    useEffect(() => {
        doFetch();
    },[doFetch])
    
    return (
        <HistoryContainer />
    )
}

export default RedeemHistory
