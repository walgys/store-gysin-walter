import React from 'react'
import { PageButtonStyled } from './style/pagebutton'

const PageButton = (props) => {
    return (
        <PageButtonStyled {...props} onClick={props.onClick}>
            {props.children}
        </PageButtonStyled>
    )
}

export default PageButton

