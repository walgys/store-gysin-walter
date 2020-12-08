import styled from 'styled-components/macro'

export const OptionsContainerStyled = styled.div`
  position: absolute;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: black;
  background-color: whitesmoke;
  left: 0px;
  top: calc(39% + 15px);
  width: 173px;
  padding-left: 3px;
  z-index: 10;
`
export const InputContainerStyled = styled.div`
    position: relative;
    flex-direction: column;
`
export const InputStyled = styled.input`
    width: 170px;
    position: relative;
    top: 39%;
`
export const CategoryFilterStyled = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    flex-grow: 1;
    align-self: flex-start;
    align-items: center;
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
  background: silver;
  display: flex;
  margin: 5px;
  padding: 5px 10px 5px 10px;
  width: fit-content;
  border-radius: 15px;
  max-width: 200px;
`
export const PillCloseStyled = styled.span`
  margin-left: 5px;
  font-weight: 600;
`