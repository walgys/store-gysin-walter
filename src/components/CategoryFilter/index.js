import React from 'react'
import { useState, useContext, useEffect} from 'react'
import { appContext } from '../../contexts'
import { CategoryFilterStyled , PillsContainerStyled , PillCloseStyled,  PillStyled,  InputContainerStyled, InputStyled, OptionsContainerStyled } from './styles/categoryfilter'

const CategoryFilter = () => {
    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState('')
    const { productsCategories, setProductsFilters, productsFilters  } = useContext(appContext)

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
        setOptions(categories => categories.filter(category => category !== cat))
        
    }
    const getCategoryPills = () => {
        var filter = productsFilters.find(f => f.filterName === 'filterCategory')
        if (filter.params.category !== undefined){
            return <>
                <PillStyled cursor={'pointer'} background={'#0ad4fa'} onClick={() => removeCat('all')}>Clear all</PillStyled>
            {filter.params.category.sort().map(cat => <PillStyled key={cat}>{cat}<PillCloseStyled onClick={() => removeCat(cat)}>X</PillCloseStyled></PillStyled> )}
            </>
        }

    }

    const removeCat = (cat) => {
        setProductsFilters(filters => filters.map(filter => {
            if (filter.filterName === 'filterCategory'){
                if(filter.params.category){
                    if (cat === 'all'){
                        return {...filter, params: {}}
                    }else{
                        var categories = filter.params.category.filter(category => category !== cat)
                        if(categories.length > 0){
                            return {...filter, params: {category: categories }}
                        }else{
                            return {...filter, params: {}}
                        }
                    }
                    
                }
               
            }
                return filter
        }
    )
    )
    if (cat === 'all'){
        setOptions(productsCategories)
    }else{
       setOptions(categories => [...categories, cat]) 
    } 
    }

    return (
        <CategoryFilterStyled>
            <InputContainerStyled onMouseLeave={() => setDisplay(false)}>
            <InputStyled 
                id='filterInput'
                onClick={() => setDisplay(!display)}
                onChange={event => setSearch(event.target.value)}
                placeholder='Filtrar por: '
                value={search}
            />
            {display && <OptionsContainerStyled  >{options.sort().filter(
                option => option.toLowerCase().indexOf(search.toLowerCase()) > -1 )
                .map((v,i) => <div key={i} onClick={()=>addCategory(v)} >{v}</div>)}
                </OptionsContainerStyled>}
        </InputContainerStyled>
        <PillsContainerStyled>
            {getCategoryPills()}  
        </PillsContainerStyled>
        </CategoryFilterStyled>
        
    )
}

export default CategoryFilter
