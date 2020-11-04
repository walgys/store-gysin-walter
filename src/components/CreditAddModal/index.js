import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../contexts'
import {addCredits, endpoint} from '../../utils'
import {CreditAddModalStyled} from './styles/creditaddmodal'

const CreditAddModal = (props) => {
    const {toast} = props
    const {setCreditAddModal, fetchUser} = useContext(appContext)

    
    const onClick = (credits)=>{
        setCreditAddModal(false)
        
        const addAmount = async (credits)=>{ 
        try{
            toast.info('Trying to add Credits',{
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                } )
            const success = await addCredits(credits)
             
            if (success){
                toast.success('Credits have been added to your account',{
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    } )
                fetchUser(endpoint+'/user/me')
            }
        }catch(err){
            toast.error('Something went wrong, couldn\'t add Credits',{
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                } )
          }
      
        
    }
    addAmount(credits)
}
    return (
        <CreditAddModalStyled>
            <div className='modal-content'>
                <span onClick={()=>setCreditAddModal(false)} className="close">&times;</span>
                <h4>Which amount you want to add ?</h4>
                <div className='buttons-container'>
                    <h5 onClick={()=>onClick(1000)}>1000</h5>
                    <h5 onClick={()=>onClick(5000)}>5000</h5>
                    <h5 onClick={()=>onClick(7500)}>7500</h5>
                </div>
            </div>
        </CreditAddModalStyled>
    )
}

export default CreditAddModal
