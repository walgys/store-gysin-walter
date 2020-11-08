import { useState } from 'react'

export const endpoint = 'https://coding-challenge-api.aerolab.co'
export const header = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
}

const creditsURL = `${endpoint}/user/points`
const redeemURL = `${endpoint}/redeem`

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