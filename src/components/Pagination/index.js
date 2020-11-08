import React from 'react'
import PageButton from '../PageButton'
import {PaginationStyled} from './style/pagination'

const Pagination = (props) => {
    const { page, setPage, maxPage} = props
    return (
        <PaginationStyled>
            {<PageButton active={page > 1 ? true : false} onClick={()=>setPage(page-1)} >{'<'}</PageButton>}
            {<PageButton active={page < maxPage ? true : false} onClick={()=>setPage(page+1)} >{'>'}</PageButton>}
        </PaginationStyled>
    )
}

export default Pagination
