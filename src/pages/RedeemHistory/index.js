import React, { useEffect, useContext} from 'react'
import  HistoryContainer from '../../containers/HistoryContainer/'
import Jumbo from '../../components/Jumbo'
import { appContext } from '../../contexts'
import { endpoint } from '../../utils'



const RedeemHistory = () => {
    const {fetchHistory, setProductsLoading, productsLoading} = useContext(appContext)
    const useMountEffect = (fun) => useEffect(fun, [])
    const doFetch = () => {
        setProductsLoading(true)
        fetchHistory(endpoint + '/user/history')
        }

    useMountEffect(doFetch)
    
    return (
        <>
        <Jumbo category={'HISTORY'} />
        <HistoryContainer loading={productsLoading} />
        </>
    )
}

export default RedeemHistory
