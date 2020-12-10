import styled from 'styled-components/macro'

export const UserBarContainerStyled = styled.div`
margin-left: auto;
display: inline-flex;
height: 80px;

align-items: center;
-webkit-touch-callout: none; 
-webkit-user-select: none; 
-khtml-user-select: none; 
-moz-user-select: none; 
-ms-user-select: none; 
user-select: none;
@media (max-width: 534px){
    margin-right: 5px;
}
@media (min-width: 535px){
    margin-right: 42px;
}
.userName, h5{
    color: grey;
    text-decoration: none;
    margin-right: 10px;
    font-weight: 500;
    padding-bottom: 2px;
    @media (max-width: 399px){
        font-size: 1.3rem;
    }
    @media (min-width: 400px){
        font-size: 1.5rem;
    }
    @media (min-width: 768px){
        font-size: 1.7rem;
    }
}
`