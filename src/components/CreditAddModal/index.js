import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../contexts'
import {CreditAddModalStyled} from './styles/creditaddmodal'

function CreditAddModal() {
    const {setCreditAddModal} = useContext(appContext)
    return (
        <CreditAddModalStyled>
            <div className='modal-content'>
                <span onClick={()=>setCreditAddModal(false)} className="close">&times;</span>
                <h4>Which amount you want to add ?</h4>
                <div className='buttons-container'>
                    <h5>1000</h5>
                    <h5>5000</h5>
                    <h5>7500</h5>
                </div>
            </div>
        </CreditAddModalStyled>
    )
}

export default CreditAddModal
