import React, { useState, useEffect } from 'react';
import Header from './containers/Header'
import styled from 'styled-components'
import {endpoint, headers, useFetch} from './utils'
import Products from './pages/Products';
import CreditAddModal from './components/CreditAddModal'
import { appContext } from './contexts';




const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
`

function App() {
  const [user, fetchUser] = useFetch()
  const [loading, setLoading] = useState(true)
  const [creditAddModal, setCreditAddModal] = useState(false)
   
  useEffect(() => { 
    fetchUser(endpoint + '/user/me')  
  }, [])

  useEffect(() => {
    Object.keys(user).length > 0 && setLoading(false)
  }, [user])


  const values = {user, fetchUser, creditAddModal, setCreditAddModal}

  return (
       <Container>
         <appContext.Provider value={values} >
           {creditAddModal && <CreditAddModal />}
           {loading ? <p>Loading...</p> : <Header />}
           {loading ? <p>Loading...</p> : <Products />}
         </appContext.Provider>
        </Container>
     );
}

export default App;
