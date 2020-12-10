import styled from 'styled-components/macro'

export const Bar = styled.div`
display: flex;
justify-content: space-between;
`
export const LogoImg = styled.img`


width: 39px;
height: 36px;

@media (max-width: 399px){
    margin: 22px 5px 22px 8px;   
}
@media (min-width: 400px){
    margin: 22px 0px 22px 20px;    
}
@media (min-width: 768px){
    margin: 22px 0px 22px 42px;
}
@media (min-width: 960px){

}
`