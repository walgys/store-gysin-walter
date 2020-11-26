import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../contexts'
import {redeemItem, endpoint} from '../../utils'
import {RedeemModalStyled} from './styles/redeemmodal'

const RedeemModal = (props) => {
    const {toast, productId, productName} = props
    const {setRedeemModal, fetchUser} = useContext(appContext)

    
    const onClick = (productId, productName)=>{
        setRedeemModal(false)
        
        const redeem = async (productId)=>{ 
        try{
            toast.info('Trying to redeem your product',{
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                } )
            const success = await redeemItem(productId)
             
            if (success){
                toast.success(`Redeem Successful, ${productName} is yours.`,{
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
    redeem(productId)
}
    return (
        <RedeemModalStyled>
            <div className='modal-content'>
                <span onClick={()=>setRedeemModal(false)} className="close">&times;</span>
                <h4>Are you sure ?</h4>
                <div className='buttons-container'>
                    <h5 onClick={()=>onClick(productId, productName)}>Redeem</h5>
                    <h5 onClick={()=>setRedeemModal(false)}>Cancel</h5>
                </div>
            </div>
        </RedeemModalStyled>
    )
}

export default RedeemModal
