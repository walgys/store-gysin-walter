import React, { useState, useEffect } from 'react';

import styled from 'styled-components'
import {endpoint, useFetch} from './utils'
import Products from './pages/Products';

import { appContext } from './contexts';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import RedeemHistory from './pages/RedeemHistory';




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
  const [products, fetchProducts] = useFetch([])
   
  useEffect(() => { 
    fetchUser(endpoint + '/user/me')  
  }, [])

  useEffect(() => {
    Object.keys(user).length > 0 && setLoading(false)
  }, [user])


  const values = {
    user,
    fetchUser,
    creditAddModal,
    setCreditAddModal,
    loading,
    products,
    fetchProducts}

  return (
       <Container>
         <appContext.Provider value={values} >
           <Router>
             <Switch>
               <Route exact path='/'>
                 <Redirect to='/products' />
               </Route>
               <Route exact path='/products' component={Products} />
               <Route exact path='/redeem' component={RedeemHistory} />
             </Switch>
            
           </Router>
           
         </appContext.Provider>
        </Container>
     );
}

export default App;
