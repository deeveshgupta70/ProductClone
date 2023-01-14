import React, { useState } from 'react'

const Modal = ({show , onClose,imgVal}) => {
    const [modalI , setModalI] = useState(imgVal);
    const [magnify , setMagnify] = useState(false);

  if(!show) return null;

  return (
    <div className='modal'>
        <div className='modal-left'>
            <h3>Van Heusen Men's Regular Fit<br></br> Polo Shirt</h3>
            <p>Size : M</p>
            <p>Color : Black</p>
            <div className='image-grid'>
                <img src = {require('./images/pic1.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)} alt = ""/>
                <img src = {require('./images/pic5.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)}  alt = ""/>
                <img src = {require('./images/pic6.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)}  alt = ""/>
                <img src = {require('./images/pic7.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)} alt = ""/>
                <img src = {require('./images/pic9.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)} alt = ""/>
                <img src = {require('./images/pic11.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)} alt = ""/>
                <img src = {require('./images/pic12.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)} alt = ""/>
                <img src = {require('./images/pic14.jpg')} className = "grid-image" onClick ={(e)=>setModalI(e.target.src)} alt = ""/>


            </div>
        </div>
        <div className='modal-right' onClick={()=>setMagnify(!magnify)}>
            <button onClick={onClose} className='modal-right-button'>close</button>
            <img src = {(modalI !== ''? modalI : require('./images/pic1.jpg'))} className = {`${magnify ? "increase" : ""} `} alt=""></img>
        </div>
    </div>
  )
}

export default Modal