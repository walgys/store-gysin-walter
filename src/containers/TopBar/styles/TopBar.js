import styled from 'styled-components/macro'

export const Bar = styled.div`
display: flex;
justify-content: space-between;
`
export const LogoImg = styled.img`


width: 39px;
height: 36px;

@media (max-width: 534px){
    margin: 22px 5px 22px 5px;
    width: 39px;
    height: 36px;      
}
@media (min-width: 535px){
    margin: 22px 0px 22px 20px;    
}
@media (min-width: 768px){
    margin: 22px 0px 22px 42px;
}
@media (min-width: 960px){

}
`