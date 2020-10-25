import styled from 'styled-components'

export const RedeemStyled = styled.div`
    background: rgba(37, 187, 241,0.85);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
`
export const PriceStyled = styled.div`
    width: 150px;
    height: 45px;
    position: absolute;
    display: inline-flex;
    bottom: 50%;
    left: 50%;
    margin-left: -75px;
    align-items: center;
    justify-content: center;
    & h5{
        font-size: 34px;
        line-height: 45px;
        font-weight: 500;
        color: #ffffff;
    }
    & img{
        width: 30px;
        height: 30px;
        padding-top: 7px;
        margin-left: 5px;
    }
`
export const RedeemButtonStyled = styled.h5`
    background: rgba(255, 255, 255, 1);
    color: rgba(130, 130,130,1);
    width:228px;
    height:42px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0);
    bottom: 20%;
    left: 50%;
    margin-left: -114px;
    text-align: center;
    line-height: 42px;
    &:hover{
        cursor: pointer;
        //background: #40BBF1;
        color: black;   
        -webkit-box-shadow: 0px 1px 3px 0px #000000; 
        box-shadow: 0px 1px 3px 0px #000000;
        transform: perspective(1px) scale(1.05);
        transition: all 0.3s;
    }
`

export const IconStyled = styled.div`
    position: absolute;
    z-index: 11;
    width: 41px;
    height: 43px;
    border-radius:50%;
    background-size: 41px 43px;
    right: 5%;
    top: 5%;
    background-image: url(${props=>props.icon});
    //transition: all 1s;
    &:hover{
        cursor: pointer;
        -webkit-box-shadow: 0px 1px 3px 0px #000000; 
        box-shadow: 0px 1px 3px 0px #000000;
        transform: perspective(1px) scale(1.1);
        transition: all 0.3s;
    }
`

export const ContainerStyled = styled.div`
    width: 254px;
    height: 254px;  
    padding: 12px;
    box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
    background:#ffffff;
    margin: 10px;
    align-items: center;
    position: relative;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0);
    transition: all 0.5s;
    ${RedeemStyled}{
        opacity: 0;
        overflow: hidden;
        transition: opacity 0.5s;
    }
    
    &:hover{
        transform: translate(10px, -10px);
        transition: all 0.5s; 
        ${RedeemStyled}{
        opacity: 1;
        overflow: hidden;
        transition: opacity 0.5s;
        }
    }
`


export const CategoryStyled = styled.h5`
    margin: 0px 12px 3px 12px;
    color:#a3a3a3;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    padding-top: 19px;
    border-top: 1px solid black;
`
export const TextStyled = styled.h5`
    margin: 3px 12px 3px 12px;
    font-family: 'Source Sans Pro', sans-serif; 
    color:#616161;
    font-size: 18px;
    font-weight: 500;
`

export const ImageStyled = styled.img`
    width: 252px;
    height: 182px;
`
