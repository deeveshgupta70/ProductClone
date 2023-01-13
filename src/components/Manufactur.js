import React from 'react'

const Manufactur = () => {
  return (
    <div>
        <h1>From the manufacturer</h1>

        <div className='container'>

            <img src = {require('./images/m1.jpg')} alt="m1"/>
            <img src = {require('./images/m2.jpg')} alt="m1"/>
            <img src = {require('./images/m3.jpg')} alt="m1"/>
            <img src = {require('./images/m4.jpg')} alt="m1"/>

        </div>
        
    </div>
  )
}

export default Manufactur