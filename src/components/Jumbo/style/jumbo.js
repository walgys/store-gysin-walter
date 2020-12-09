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
    font-weight: 700;    

    
}
@media (max-width: 534px){
    & h1{
        font-size: 1.5rem;   
        bottom: 5%;
        left: 5%;
    }      
}
@media (min-width: 535px){
    & h1{
        font-size: 2rem;   
        bottom: 7%;
        left: 7%;
    }    
}
@media (min-width: 768px){
    & h1 {
        font-size: 3rem;
        font-weight: 700;    
        bottom: 10%;
        left: 10%;
    }
}

`