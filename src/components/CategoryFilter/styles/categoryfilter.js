import styled from 'styled-components'

export const OptionsContainerStyled = styled.div`
  position: absolute;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: black;
  background-color: whitesmoke;
  left: 0px;
  top: calc(39% + 20px);
  width: 100%;
  z-index: 12;
`
export const InputContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    & input{
        position: relative;
        top: 39%;
    }
`
