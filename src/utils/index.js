import { useState } from 'react'

export const endpoint = 'https://coding-challenge-api.aerolab.co'
export const header = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
}

const creditsURL = `${endpoint}/user/points`
const redeemURL = `${endpoint}/redeem`
export const imgURL = 'https://coding-challenge-api.aerolab.co'

export const useFetch = (initialState = {}) => {
    
    const [data, setData] = useState(initialState)
    const fetchData = async (url)=>{
        try{
            const userResult = await fetch(url, {headers: header})
            const userData = await userResult.json()
            setData(userData)
        }catch(err){
            console.log(err)
        }  
    }
    return [data, fetchData]
}



export const addCredits = async (amount) =>{
    try{
        const userResult = await fetch(creditsURL, {method: 'POST', mode: 'cors', body: JSON.stringify({amount}), headers: {...header, Accept: 'application/json' }})
        return userResult.ok  
    }catch(err){
        return false
    }
}

export const redeemItem = async (productId) => {
    try{
        const redeemResult = await fetch(redeemURL, {method: 'POST', mode: 'cors', body: JSON.stringify({productId}), headers: {...header, Accept: 'application/json' }})
        return redeemResult
    }catch(err){
        return false
    }
}

export const orderByDate = (items, params) => {
    if (params.order){
      if (params.order === 'Descendant') return items.sort((a, b) => new Date(b.createDate) - new Date (a.createDate))
      if (params.order === 'Ascendant') return items.sort((a, b) => new Date(a.createDate) - new Date (b.createDate))
    }else{
      return items
    }
  }
 export const orderByPrice = (items, params) => {
    if (params.order){
      if(params.order === 'Descendant') return items.sort((a, b) => b.cost - a.cost)
      if(params.order === 'Ascendant') return items.sort((a, b) => a.cost - b.cost)
    }else{
      return items
    }
  }
  export const filterCategory = (items, params) => items.filter(item => { if(params.category){return params.category.includes(item.category)}else{ return true}})