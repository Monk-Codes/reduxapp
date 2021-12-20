import React from 'react'
import { actionCreators } from '../State/index'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

function Shop() {
    const dispatch = useDispatch()
    const{withdrawTokenZi,depositTokenZi}=bindActionCreators(actionCreators,dispatch)
    return (
        <div>
            <h2>TokenZi</h2>
           <button className="btn btn-primary mx-2"placeholder='10' onClick={()=>{withdrawTokenZi(10)}}>-</button> 
           Your TokenZi
           <button className="btn btn-primary mx-2"placeholder='10' onClick={()=>{depositTokenZi(10)}}>+</button> 
        </div>
    )
}

export default Shop
