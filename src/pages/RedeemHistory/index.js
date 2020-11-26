import React, { useEffect, useContext} from 'react'
import  HistoryContainer from '../../containers/HistoryContainer/'
import { appContext } from '../../contexts'
import { endpoint } from '../../utils'



const RedeemHistory = () => {
    const {fetchHistory} = useContext(appContext)
    const useMountEffect = (fun) => useEffect(fun, [])
    const doFetch = () => {
        fetchHistory(endpoint + '/user/history')
        }

    useMountEffect(doFetch)
    
    return (
        <HistoryContainer />
    )
}

export default RedeemHistory
