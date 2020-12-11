import React from 'react'
import {FooterContainerStyled} from './styles/footer.js'

const Footer = ({children}) => {
    return (
        <FooterContainerStyled>
            {children}
        </FooterContainerStyled>
    )
}

export default Footer
