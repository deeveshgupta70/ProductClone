import React from 'react'

const Customer = () => {
  return (
    <>
    <div className='customer'>
        <div className='customer-left'>
            <h1>Customer Review</h1>
            <div className="star-row">
                <i className="fas fa-star"/>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span> 5 out of 5
                </span>
            </div>
            <br></br>
            <h4>123,003 Global Rating</h4>
            <br/>
            <div className='bar'>
                <span>5 star</span>
                <div class="customer-container">
                    <div class="skill star5"></div>
                </div>
                <span>80%</span>
            </div>
            <div className='bar'>
                <span>4 star</span>
                <div class="customer-container">
                    <div class="skill star4"></div>
                </div>
                <span>50%</span>
            </div>
            <div className='bar'>
                <span>3 star</span>
                <div class="customer-container">
                    <div class="skill star3"></div>
                </div>
                <span>20%</span>
            </div>
            <div className='bar'>
                <span>2 star</span>
                <div class="customer-container">
                    <div class="skill star2"></div>
                </div>
                <span>40%</span>
            </div>
            <div className='bar'>
                <span>1 star</span>
                <div class="customer-container">
                    <div class="skill star1"></div>
                </div>
                <span>30%</span>
            </div>
            <hr style = {{width:"20vw"}}></hr>

            <h2>Review this Product</h2>
            <p>Share your thought with other customers</p>
            <button className='review-buttons'> Write a product review</button>
            
        </div>
        <div className='customer-right'>
            <h1> Review With Images</h1>
            <br></br>
            <div className='customer-left-image'>
                <img src = {require('./images/product-image.jpg')} alt = ""/>
                <img src = {require('./images/product-image.jpg')} alt = ""/>
                <img src = {require('./images/product-image.jpg')} alt = ""/>
                <img src = {require('./images/product-image.jpg')} alt = ""/>

            </div>
            <br></br>
            <br></br>

            <h2 style = {{marginBottom:"15px"}}>Top Reviews From India</h2>

            <div className='feedback'>
                <div className='col1' style = {{display:"flex ", alignItems:"center" , }}>
                    <img src = {require('./images/unknown.jpg')} style = {{marginRight:"10px"}} alt = ""/>
                    <h4> viShalv</h4>
                </div>
                <div style = {{display:"flex ", alignItems:"center" , }}>
                    <div className="star-row">
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> Good quality & fit. They screwed up logo colours.</p>
                </div>
                <p>Reviewed in India on 24 December 2022</p>
                <p>Size: XL | Colour: Black | Verified Purchase</p>
                <p>It's a great piece of garment from a popular brand. Quality of clothe and fit are as expected. However one buys such products for the brand it shows off... Where they have screwed up. The two colours in the Van Heusen logo (in this product) are biege and white. Looks hotch porch of shield and alphabets V-H. Doesn't look good. At all.</p>

                <div style = {{display:"flex "}}> 
                    <button> Helpful</button>
                    <p> | Report Abuse</p>
                </div>
            </div>

            <div className='feedback'>
                <div className='col1' style = {{display:"flex ", alignItems:"center" , }}>
                    <img src = {require('./images/unknown.jpg')} style = {{marginRight:"10px"}} alt = ""/>
                    <h4> viShalv</h4>
                </div>
                <div style = {{display:"flex ", alignItems:"center" , }}>
                    <div className="star-row">
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> Good quality & fit. They screwed up logo colours.</p>
                </div>
                <p>Reviewed in India on 24 December 2022</p>
                <p>Size: XL | Colour: Black | Verified Purchase</p>
                <p>It's a great piece of garment from a popular brand. Quality of clothe and fit are as expected. However one buys such products for the brand it shows off... Where they have screwed up. The two colours in the Van Heusen logo (in this product) are biege and white. Looks hotch porch of shield and alphabets V-H. Doesn't look good. At all.</p>
                <div style = {{display:"flex "}}> 
                    <button> Helpful</button>
                    <p> | Report Abuse</p>
                </div>

            </div>

            <div className='feedback'>
                <div className='col1' style = {{display:"flex ", alignItems:"center" , }}>
                    <img src = {require('./images/unknown.jpg')} style = {{marginRight:"10px"}} alt = ""/>
                    <h4> viShalv</h4>
                </div>
                <div style = {{display:"flex ", alignItems:"center" , }}>
                    <div className="star-row">
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> Good quality & fit. They screwed up logo colours.</p>
                </div>
                <p>Reviewed in India on 24 December 2022</p>
                <p>Size: XL | Colour: Black | Verified Purchase</p>
                <p>It's a great piece of garment from a popular brand. Quality of clothe and fit are as expected. However one buys such products for the brand it shows off... Where they have screwed up. The two colours in the Van Heusen logo (in this product) are biege and white. Looks hotch porch of shield and alphabets V-H. Doesn't look good. At all.</p>
                <div style = {{display:"flex "}}> 
                    <button> Helpful</button>
                    <p> | Report Abuse</p>
                </div>

            </div>

            <div className='feedback'>
                <div className='col1' style = {{display:"flex ", alignItems:"center" , }}>
                    <img src = {require('./images/unknown.jpg')} style = {{marginRight:"10px"}} alt = ""/>
                    <h4> viShalv</h4>
                </div>
                <div style = {{display:"flex ", alignItems:"center" , }}>
                    <div className="star-row">
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> Good quality & fit. They screwed up logo colours.</p>
                </div>
                <p>Reviewed in India on 24 December 2022</p>
                <p>Size: XL | Colour: Black | Verified Purchase</p>
                <p>It's a great piece of garment from a popular brand. Quality of clothe and fit are as expected. However one buys such products for the brand it shows off... Where they have screwed up. The two colours in the Van Heusen logo (in this product) are biege and white. Looks hotch porch of shield and alphabets V-H. Doesn't look good. At all.</p>

                <div style = {{display:"flex "}}> 
                    <button> Helpful</button>
                    <p> | Report Abuse</p>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Customer