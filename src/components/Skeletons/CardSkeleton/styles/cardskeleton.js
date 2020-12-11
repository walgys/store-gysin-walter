import styled from 'styled-components/macro'


export const ContainerStyled = styled.div`
    width: ${props => props.width ? props.width : '254px'};
    height: 254px;  
    padding: 12px;
    box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
    background:#ffffff;
    margin: 10px;
    align-items: center;
    position: relative;
    backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0);
    transition: all 0.5s;
    
    &:hover{
        transform: translate(10px, -10px);
        transition: all 0.5s; 
        
    }
`

export const ImageStyled = styled.div`
    width: '252px';
    height: '182px';
`