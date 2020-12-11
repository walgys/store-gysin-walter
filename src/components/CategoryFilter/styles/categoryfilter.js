import styled from 'styled-components/macro'

export const OptionsContainerStyled = styled.div`
  position: absolute;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: black;
  background-color: whitesmoke;
  left: 0px;
  top: calc(39% + 15px);
  width: 153px;
  padding-left: 3px;
  z-index: 10;
  :hover{
    cursor: pointer;
  }
`
export const InputContainerStyled = styled.div`
    position: relative;
    flex-direction: column;
`
export const InputStyled = styled.input`
    width: 150px;
    position: relative;
    top: 39%;
    @media (max-width: 534px){
      width: 150px;
    }
`
export const CategoryFilterStyled = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    flex-grow: 1;
    align-self: flex-start;
    align-items: center;
    @media (max-width: 534px){
      flex-direction: column;
      justify-content: space-between;
    }
`
export const PillsContainerStyled = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  min-height: 40px;
  margin: 0px 0px 0px 10px;
  //background: red;
`
export const PillStyled = styled.div`
  background: ${props => props.background ? props.background : 'lightgrey'};
  display: flex;
  margin: 5px;
  align-items: center;
  padding: 5px 10px 5px 10px;
  width: fit-content;
  border-radius: 15px;
  max-width: 200px;
  :hover{
    cursor: ${props => props.cursor ? props.cursor : 'normal'}
  }
  @media (max-width: 320px){
    font-size: 0.6rem;
  }
  @media (min-width: 321px){
    font-size: 0.7rem;
  }
  @media (min-width: 535px){
    font-size: 0.9rem;
  }
`
export const PillCloseStyled = styled.span`
  margin-left: 5px;
  font-weight: 600;
  :hover{
    cursor: pointer;
  }
`