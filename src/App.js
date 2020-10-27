import React, { useState, useEffect } from 'react';
import Header from './containers/Header'
import styled from 'styled-components'
import {endpoint, headers} from './utils'
import Products from './pages/Products';
import { userContext } from './contexts';




const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
`

function App() {
  const [user, setUser] = useState({})

  useEffect(() => { 
    const fetchData = async ()=>{
    const userResult = await fetch(endpoint + '/user/me', headers)
    const userData = await userResult.json()
    setUser(userData)
  }
    fetchData()
    
  }, [])
  return (
       <Container>
         <userContext.Provider value={{user: user}} >
           <Header />
           <Products />
         </userContext.Provider>
        </Container>
     );
}

export default App;
