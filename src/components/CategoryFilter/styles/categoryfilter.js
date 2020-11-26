import styled from 'styled-components'

export const OptionsContainerStyled = styled.div`
  position: absolute;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: black;
  background-color: whitesmoke;
  left: 0px;
  top: calc(39% + 20px);
  width: 173px;
  padding-left: 3px;
  z-index: 10;
`
export const InputContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    & input{
        width: 170px;
        position: relative;
        top: 39%;
    }
`
