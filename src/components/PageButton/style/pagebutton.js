import styled from 'styled-components/macro'

export const PageButtonStyled = styled.div`
    border:${props => props.active===true ? "2px solid #616161" : "2px solid #d9d9d9"};
    width:46px;
    height:46px;
    border-radius:100%;
    color: ${props => props.active===true ? "#616161;" : "#d9d9d9"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    padding-bottom: 8px;
    :hover{
        cursor: ${props => props.active===true ? "pointer" : "default"};
    }    
`