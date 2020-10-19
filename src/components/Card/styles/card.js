import styled from 'styled-components'
import buyBlueIcon from  '../../../icons/buy-blue.svg'


export const Container = styled.div`
    width: 254px;
    height: 254px;  
    padding: 12px;
    box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
    background:#ffffff;
    margin: 10px;
    align-items: center;
    position: relative;
`
export const Title = styled.h5`
    margin: 0px 12px 3px 12px;
    color: grey;
    font-size: 0.9rem;
    padding-top: 19px;
    border-top: 1px solid black;
`
export const Text = styled.h5`
    margin: 3px 12px 3px 12px;
    font-size: 1.1rem;
    font-weight: 600;
`

export const Image = styled.img`
    width: 252px;
    height: 182px;
`

export const Button = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    right: 5%;
    top: 5%;
    background-image: url(${buyBlueIcon});
`