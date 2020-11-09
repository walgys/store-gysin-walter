import styled from 'styled-components'

export const FilterPriceStyled = styled.div`
    display:flex;
    justify-content: space-between;
`

export const FilterPriceButton = styled.h5`
    background:${props => props.active ? '#0ad4fa' : '#ededed'};
    border-radius:100px;
    text-align: center;
    justify-content: center;
    width:172px;
    height:48px;
    line-height: 48px;
    :hover{
        cursor: pointer;
    }
`