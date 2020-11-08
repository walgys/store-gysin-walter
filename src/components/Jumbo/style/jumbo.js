import styled from 'styled-components/macro'


export const Jumbotron = styled.div`
width: 100%;
padding-top: 80px;
max-width: 1440px;
height: auto;
max-height: 300px;
position: relative;
& img{
    width: 100%;
    max-width: 1440px;
    max-height: 300px;
    object-fit: cover;
}
& h1{
    font-family: 'Source Sans Pro', sans-serif; 
    color: white;
    position: absolute;
    font-size: 3rem;
    font-weight: 700;    
    bottom: 10%;
    left: 10%;
}
`