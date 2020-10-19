import React from 'react';
import Header from './containers/Header'
import styled from 'styled-components'
import ProductsContainer from './containers/ProductsContainer';




const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
`

function App() {
  return (
 
       <Container>
      <Header />
      <ProductsContainer />
    </Container>
 
     );
}

export default App;
