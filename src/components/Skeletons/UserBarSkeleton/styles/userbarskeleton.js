import styled from 'styled-components/macro'


export const UserBarSkeletonStyled = styled.div`
margin-left: auto;
display: inline-flex;
height: 80px;
margin-right: 42px;
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
.name{
    height: 34px;
    width: 130px;
    margin-right: 10px;
    padding-bottom: 2px;
    @media (max-width: 400px){
        width: 100px;
    }
}
.points{
    height: 48px;
    width: 170px;
    padding: 3px;
    margin: 5px;
    @media (max-width: 400px){
        width: 150px;
    }
}
`