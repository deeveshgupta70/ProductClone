import React from 'react'

const Query = () => {
  return (
    <>
        <div className='review'>

            <h1>Looking for specific info ?</h1>
            <br></br>
            <div className='inpt'>
                <img src = {require('./images/sicon.png')} alt = ""/>
                <input type='text' placeholder="Search in reviews, Q&A"/>
            </div>
            <br></br>

            <h1> Customer questions & answers</h1>
            <div className='inr'>
                <div className='leftp'>
                    <img src = {require('./images/upTriangle.png')} alt = ""/>
                    <p>2</p>
                    <p>votes</p>
                    <img src = {require('./images/dTriangle.png')} alt = ""/>
                </div>
                <div className = "rightp">
                    <div className='detail'>
                        <span className='bold'>Questions :</span> <span className='spaceQ'></span>Medium size 40 or 42 inch?
                    </div>
                    <div className='detail'>
                    <span className='bold'>Answer : </span><span className='spaceA'></span>
                        <div> 
                            <p>50</p>
                            <p>By Dipankar Hazarika on 9 October, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inr'>
                <div className='leftp'>
                    <img src = {require('./images/upTriangle.png')} alt = ""/>
                    <p>1</p>
                    <p>votes</p>
                    <img src = {require('./images/dTriangle.png')} alt = ""/>
                </div>
                <div className = "rightp">
                    <div className='detail'>
                        <span className='bold'>Questions :</span> <span className='spaceQ'></span>I wear large size reebok and being human roundneck tees.what size i order to fit perfect.
                    </div>
                    <div className='detail'>
                    <span className='bold'>Answer : </span><span className='spaceA'></span>
                        <div> 
                            <p>Large</p>
                            <p>By Pradip Kr Thakur on 17 August, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inr'>
                <div className='leftp'>
                    <img src = {require('./images/upTriangle.png')} alt = ""/>
                    <p>2</p>
                    <p>votes</p>
                    <img src = {require('./images/dTriangle.png')} alt = ""/>
                </div>
                <div className = "rightp">
                    <div className='detail'>
                        <span className='bold'>Questions :</span> <span className='spaceQ'></span>When will be flame orange colour back in stock??
                    </div>
                    <div className='detail'>
                    <span className='bold'>Answer : </span><span className='spaceA'></span>
                        <div> 
                            <p>Aa jayega kuch time lagega</p>
                            <p>By C.M. on 13 June, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inr'>
                <div className='leftp'>
                    <img src = {require('./images/upTriangle.png')} alt = ""/>
                    <p>2</p>
                    <p>votes</p>
                    <img src = {require('./images/dTriangle.png')} alt = ""/>
                </div>
                <div className = "rightp">
                    <div className='detail'>
                        <span className='bold'>Questions :</span> <span className='spaceQ'></span>Is this product good
                    </div>
                    <div className='detail'>
                    <span className='bold'>Answer : </span><span className='spaceA'></span>
                        <div> 
                            <p>YES</p>
                            <p>By Amal Roy chaudhuri on 2 March, 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className='review-button'>See more answered questions(121)</button>
        </div>
        <hr style = {{width:"95vw" , marginLeft : "10px"}}></hr>
    </>

  )
}

export default Query