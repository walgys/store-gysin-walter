import React from 'react'
import PageButton from '../PageButton'
import {PaginationStyled} from './style/pagination'

const Pagination = (props) => {
    const { page, setPage, maxPage} = props
    const pageDownButtonActive = <PageButton active={true} onClick={()=>setPage(page-1)} >{'<'}</PageButton>
    const pageDownButton = <PageButton active={false} >{'<'}</PageButton>
    const pageUpButtonActive = <PageButton active={ true } onClick={()=>setPage(page+1)} >{'>'}</PageButton>
    const pageUpButton = <PageButton active={ false } >{'>'}</PageButton>
    console.log(page,maxPage)
    return (
        <PaginationStyled>
            {page > 1 ? pageDownButtonActive : pageDownButton}
            {page < maxPage ? pageUpButtonActive : pageUpButton}
        </PaginationStyled>
    )
}

export default Pagination
