import styled from 'styled-components/macro'

export const FilterPriceStyled = styled.div`
    display:flex;
    justify-content: space-between;
`

export const FilterPriceButton = styled.h5`
    background:${props => props.active ? '#0ad4fa' : '#ededed'};
    margin-right: 20px;
    border-radius:100px;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    text-align: center;
    justify-content: center;
    width:172px;
    height:48px;
    line-height: 48px;
    :hover{
        cursor: pointer;
    }
`