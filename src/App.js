import React, { useState, useEffect } from 'react';

import styled from 'styled-components/macro'
import {endpoint, useFetch} from './utils'
import Products from './pages/Products';
import { appContext } from './contexts';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import RedeemHistory from './pages/RedeemHistory';
import CreditAddModal from './components/CreditAddModal'
import RedeemModal from './components/RedeemModal'
import Header from './containers/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";




const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  background: #f9f9f9;
`

const App = () => {
  const [user, fetchUser] = useFetch()
  const [loading, setLoading] = useState(true)
  const [creditAddModal, setCreditAddModal] = useState(false)
  const [redeemModal, setRedeemModal] = useState(false)
  const [productId, setProductId] = useState('')
  const [products, fetchProducts] = useFetch([])
  const productsPerPage = 16
  const [page, setPage] = useState(1)
  const [pageRange, setPageRange] = useState({start:0, end:productsPerPage})
  const credits = user.points
  const maxPage = Math.ceil(products.length / productsPerPage)
  
  useEffect(() => { 
    fetchUser(endpoint + '/user/me')  
  },[])

  useEffect(() => {
    Object.keys(user).length > 0 && setLoading(false)
  }, [user])

  useEffect(() => {
    if(page === 1 ) setPageRange({start:0, end:productsPerPage})
    if(page > 1 && page < maxPage) setPageRange({start: page * productsPerPage, end: (page + 1) * productsPerPage})
    if(page === maxPage) setPageRange({start: (page-1) * productsPerPage, end: page * productsPerPage})
  }, [page, maxPage])


  const values = {
    user,
    fetchUser,
    creditAddModal,
    setCreditAddModal,
    loading,
    products,
    fetchProducts,
    page,
    setPage,
    productsPerPage,
    credits,
    pageRange,
    setPageRange,
    maxPage,
    redeemModal,
    setRedeemModal,
    setProductId}

  return (
       <Container>
         <appContext.Provider value={values} >
          
           <Router>
              <ToastContainer position={'bottom-right'} autoClose={3000}/>
          {creditAddModal && <CreditAddModal toast={toast}/>}
          {redeemModal && <RedeemModal productId={productId} toast={toast}/>}
          {loading ? <p>Loading...</p> : <Header />}
             <Switch>
               <Route exact path='/'>
                 <Redirect to='/products' />
               </Route>
               <Route exact path='/products' component={Products} />
               <Route exact path='/history' component={RedeemHistory} />
             </Switch>
            
           </Router>
           
         </appContext.Provider>
        </Container>
     );
}

export default App;
