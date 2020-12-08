import React from 'react'
import { useState, useContext, useEffect} from 'react'
import { appContext } from '../../contexts'
import { CategoryFilterStyled , PillsContainerStyled , PillCloseStyled,  PillStyled,  InputContainerStyled, InputStyled, OptionsContainerStyled } from './styles/categoryfilter'

const CategoryFilter = () => {
    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState('')
    const { productsCategories, setProductsFilters  } = useContext(appContext)

    useEffect(() => {
        setOptions(productsCategories)
    }, [productsCategories])

    const addCategory = (cat) => {
        setDisplay(false)
        setSearch('')
        setProductsFilters(filters => filters.map(filter => {
                if (filter.filterName === 'filterCategory'){
                    if(filter.params.category){
                        return {...filter, params: {category: [...filter.params.category, cat]}}
                    }else{
                        return {...filter, params: {category: [cat]}}
                    }
                   
                }
                    return filter
            }
        ) 
        ) 
    }

    return (
        <CategoryFilterStyled>
            <InputContainerStyled onMouseLeave={() => setDisplay(false)}>
            <InputStyled 
                id='filterInput'
                onClick={() => setDisplay(!display)}
                onChange={event => setSearch(event.target.value)}
                placeholder='Filtrar por: ' 
            />
            {display && <OptionsContainerStyled  >{options.filter(
                option => option.toLowerCase().indexOf(search.toLowerCase()) > -1 )
                .map((v,i) => <div key={i} onClick={()=>addCategory(v)} >{v}</div>)}
                </OptionsContainerStyled>}
        </InputContainerStyled>
        <PillsContainerStyled>
            <PillStyled>Computers<PillCloseStyled>X</PillCloseStyled></PillStyled>
            <PillStyled>Phones<PillCloseStyled>X</PillCloseStyled></PillStyled>
            <PillStyled>Laptops<PillCloseStyled>X</PillCloseStyled></PillStyled>
        </PillsContainerStyled>
        </CategoryFilterStyled>
        
    )
}

export default CategoryFilter
