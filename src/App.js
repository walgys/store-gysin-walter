import React, { useState, useEffect } from 'react';

import styled from 'styled-components/macro'
import {endpoint, useFetch, orderByPrice, orderByDate, filterCategory} from './utils'
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
  const [userLoading, setUserLoading] = useState(true)
  const [productsLoading, setProductsLoading] = useState(true)
  const [creditAddModal, setCreditAddModal] = useState(false)
  const [redeemModal, setRedeemModal] = useState(false)
  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('')
  const [products, fetchProducts] = useFetch([])
  const [history, fetchHistory] = useFetch([])
  const [productsCategories, setProductsCategories] = useState([])
  const [productsFilters, setProductsFilters] = useState([{filter: orderByPrice, filterName: 'orderByPrice', params: {order: 'Descendant'}}, {filter: filterCategory, filterName: 'filterCategory', params: {}}])
  const [historyFilters, setHistoryFilters] = useState([{filter: orderByDate, filterName: 'orderByDate', params: {order: 'Descendant'}}, {filter: filterCategory, filterName: 'filterCategory', params: {}}])
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filteredHistory, setFilteredHistory] = useState(history)
  const productsPerPage = 16
  const historyProductsPerPage = 50;
  const [page, setPage] = useState(1)
  const [pageRange, setPageRange] = useState({start:0, end:productsPerPage})
  const [historyPage, setHistoryPage] = useState(1)
  const [historyPageRange, setHistoryPageRange] = useState({start:0, end:historyProductsPerPage})
  const credits = user.points
  const maxPage = Math.ceil(filteredProducts.length / productsPerPage)
  const historyMaxPage = Math.ceil(filteredHistory.length / historyProductsPerPage)
  
  useEffect(() => { 
    fetchUser(endpoint + '/user/me')  
  })

  useEffect(() => {
    Object.keys(user).length > 0 && setUserLoading(false)
    
  }, [user])

  useEffect(() => {
    Object.keys(products).length > 0 && setProductsLoading(false)
    
  }, [products])

  useEffect(() => {
    if(page === 1 ) setPageRange({start:0, end:productsPerPage})
    if(page > 1 && page < maxPage) setPageRange({start: page * productsPerPage, end: (page + 1) * productsPerPage})
    if(page === maxPage) setPageRange({start: (page-1) * productsPerPage, end: page * productsPerPage})  
  }, [page, maxPage])

  useEffect(() => {
    if(historyPage === 1 ) setHistoryPageRange({start:0, end:historyProductsPerPage})
    if(historyPage > 1 && historyPage < historyMaxPage) setHistoryPageRange({start: historyPage * historyProductsPerPage, end: (historyPage + 1) * historyProductsPerPage})
    if(historyPage === historyMaxPage) setHistoryPageRange({start: (historyPage-1) * historyProductsPerPage, end: historyPage * historyProductsPerPage})  
  }, [historyPage, historyMaxPage])

  useEffect(() => {
    setFilteredProducts(products)
    if (productsFilters) productsFilters.forEach(({filter, params}) => {
      setFilteredProducts(prevState => filter(prevState, params))
    })
  }, [productsFilters, products])

  useEffect(() => {
    console.log(productsFilters)
  }, [productsFilters])

  useEffect(() => {
    setProductsCategories(products.map(product => product.category).filter((v,i,a) => a.indexOf(v) === i))
    
  }, [products])

  useEffect(() => {
    setFilteredHistory(history)
    if (historyFilters) historyFilters.forEach( ({filter, params}) => {
      setFilteredHistory(prevState => filter(prevState, params))
    })
  }, [historyFilters, history])

  

  const values = {
    user,
    fetchUser,
    creditAddModal,
    setCreditAddModal,
    userLoading,
    productsLoading,
    filteredProducts,
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
    setProductId,
    setProductName,
    filteredHistory,
    fetchHistory,
    setHistoryPageRange,
    setHistoryFilters,
    setProductsFilters,
    historyPageRange,
    historyMaxPage,
    historyPage,
    setHistoryPage,
    productsCategories
    }

  return (
       <Container>
         <appContext.Provider value={values} >
          
           <Router>
              <ToastContainer position={'bottom-right'} autoClose={3000}/>
          {creditAddModal && <CreditAddModal toast={toast}/>}
          {redeemModal && <RedeemModal productId={productId} productName={productName} toast={toast}/>}
          <Header loading={userLoading} />
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
