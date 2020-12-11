import styled from 'styled-components/macro'

export const FilterPriceStyled = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;
    margin: 0px 20px 0px 20px;
    @media (max-width: 534px){
        flex-direction: column;
        margin: 0px 5px 0px 5px;
    }
`

export const FilterPriceButton = styled.div`
    background:${props => props.active ? '#0ad4fa' : 'lightgrey'};
    border-radius:100px;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    text-align: center;
    justify-content: center;
    
    @media (max-width: 534px){
        font-size: 12px;
        width:100px;
        height:24px;
        line-height: 24px;
    }
    @media (min-width: 535px){
        font-size: 12px;
        width:100px;
        height:48px;
        line-height: 48px;
    }
    @media (min-width: 768px){
        font-size: 14px;
        width:140px;
    }
    @media (min-width: 960px){
        font-size: 20px;
        width:172px;
    }
    :hover{
        cursor: pointer;
    }
`