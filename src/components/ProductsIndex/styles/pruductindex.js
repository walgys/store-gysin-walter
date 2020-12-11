import styled from 'styled-components/macro'

export const ProductIndexStyled = styled.h2`
    font-family:SourceSansPro-Regular;
    font-size:24px;
    min-width: 100px;
    color:#616161;  
    letter-spacing:-0.15px;
    line-height:48px;
    text-align:left;
    border-right: 1px dotted black;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
   
    @media (max-width: 399px){
        font-size: 10px;
        padding-right: 5px;
    }
    @media (min-width: 400px){
        font-size: 12px;
        padding-right: 10px;   
       
    }

    @media (min-width: 768px){
        font-size: 18px;
        padding-right: 10px;
    }
    @media (min-width: 960px){
        font-size: 24px;
        padding-right: 20px;
    }
`