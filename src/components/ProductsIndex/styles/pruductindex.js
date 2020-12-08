import styled from 'styled-components/macro'

export const ProductIndexStyled = styled.h2`
    font-family:SourceSansPro-Regular;
    font-size:24px;
    min-width: 120px;
    color:#616161;
    padding-right: 20px;
    letter-spacing:-0.15px;
    line-height:48px;
    text-align:left;
    border-right: 1px dotted black;
    @media (max-width: 320px){
        font-size: 14px;
        padding-right: 5px;
    }
    @media (min-width: 320px){
        font-size: 14px;
        padding-right: 5px;
    }
    @media (min-width: 768px){
        font-size: 18px;
    }
    @media (min-width: 960px){
        font-size: 24px;
    }
`