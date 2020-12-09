import styled from 'styled-components/macro'

export const PageButtonStyled = styled.div`
    border:${props => props.active===true ? "2px solid #616161" : "2px solid #d9d9d9"};
    width:100%;
    height:100%;
    margin: 3px;
    border-radius:100%;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
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