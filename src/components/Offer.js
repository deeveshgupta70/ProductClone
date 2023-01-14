import React from 'react'

const Offer = () => {
  return (
    <>
        <div className='offer'>

            <h1>Special offers and product promotions</h1>
            <ul>
                <li className='about-list'>Buy 2 Get 5% Off, Buy 3 Get 10% Off</li>
                <li className='about-list'>Prime Savings : Additional Flat INR 1000 Instant Discount on SBI Credit Card Trxn. Min purchase value INR 29999</li>
                <li className='about-list'>Prime Savings : 10% Instant Discount up to INR 1500 on SBI Credit Card EMI Trxn. Min purchase value INR 5000</li>
                <li className='about-list'>Prime Savings : 10% Instant Discount up to INR 1250 on SBI Credit Card Non-EMI Trxn. Min purchase value INR 5000</li>
                <li className='about-list'>No cost EMI available on select cards. Please check 'EMI options' above for more details</li>
            </ul>
        </div>
        <hr style={{width : "95vw", marginLeft : "20px"}}></hr>
    </>
  )
}

export default Offer