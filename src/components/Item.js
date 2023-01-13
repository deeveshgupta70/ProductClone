import React, {useState } from 'react'

const Item = () => {
    let [val , setVal] = useState("");

  return (
    <main>
    <div id="ppd">

        <div className="left">
            <div id="image-list">
                <ul className="image-list-atr">
                 <li><img src={require('./images/pic1.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/></li>
                 <li><img src={require('./images/pic5.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic3"/></li>
                 <li><img src={require('./images/pic9.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic4"/></li>
                 <li><img src={require('./images/pic10.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic5"/></li>
                 <li><img src={require('./images/pic6.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic6"/></li>   
                 <li><img src={require('./images/pic7.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic7"/></li>   
                </ul>
                <div className="big-picture">
                    <img id="big-picture" src={(val !== ''? val : require('./images/pic1.jpg'))} alt="" className="img display-pic1"/>
                </div>
            </div>
        </div>
        <div className="middle-fill">
        <h1>
        Van Heusen Men's Regular Fit Polo Shirt           
            </h1>
            <span>
                Visit the Van Heusen Store
            </span>
            <div className="star-row">
                <i className="fas fa-star"/>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="arrow2 down"></i>
                <span>
                    132,545 ratings 
                </span>
                    |
                <span>
                    1000+ answered questions
                </span>

            </div>
            <div id="best-seller">
                <img src={require('./images/best-seller2.jpg')} alt=""/>
                <span>for "collar t shirts for men"</span>
            </div>
            <hr/>
            <div className="middle-text-content">
                <p>
                    List Price:	$129.99 
                </p>
                <p>
                    Price: <span className="red-big"> $62.99 </span> + No Import Fees Deposit & $14.49 Shipping to
                </p>
                <p>
                    India <span>Details</span>
                </p>
            </div>
                <div className="grid-container">
                    <div className="box">
                        <h4>S</h4>
                        <p id="color" className="font-sm-gray"></p>
                    </div>
                    <div className="box">
                        <h4>M</h4>
                        <p id="color" className="font-sm-gray"></p>
                    </div>
                    <div className="box">
                        <h4>L</h4>
                        <p id="color" className="font-sm-gray"></p>
                    </div>
                    <div className="box">
                        <h4>XL</h4>
                        <p id="color" className="font-sm-gray"></p>
                    </div>
                    <div className="box">
                        <h4>2XL</h4>
                        <p id="color" className="font-sm-gray"></p>
                    </div>
                </div>
                <hr/>
                <hr/>

                <h3> Colors</h3>
                <div className = "image-list2">
                    <img src={require('./images/pic11.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/>
                    <img src={require('./images/pic12.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/>
                    <img src={require('./images/pic13.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/>
                    <img src={require('./images/pic14.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/>
                    <img src={require('./images/pic12.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/>
                    <img src={require('./images/pic13.jpg')} alt="" onMouseOver={(e)=>setVal(e.target.src)} className="border2 display-pic1"/>
                </div>

                <h1 style = {{fontSize : '1px',marginBottom:'2px'}}>Product Details</h1>
              
                <table>
                    <tr>
                        <td>
                           <h4>Brand</h4> 
                        </td>
                        <td className="right-table">
                           <p>Van Heusen</p> 
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                           <h4>Style</h4> 
                        </td>
                        <td className="right-table">
                           <p>Wester</p> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <h4>Neck Style</h4> 
                        </td>
                        <td className="right-table">
                           <p>Polo</p> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <h4>Patter</h4> 
                        </td>
                        <td className="right-table">
                           <p>Solid</p> 
                        </td>
                    </tr>
                    <tr>
                     
                    </tr>
                    <tr>
                        <td><h4>Country of Origin</h4></td>
                        <td className="right-table"><p>India</p></td>
                    </tr>
                    <tr>
                       <td><h4>Interface</h4></td>
                    </tr>
                </table>
                
                <hr/>

                <h4 id="about-list-title">About this item</h4>
                <ul className="about-list">
                    <li>Occasion : Leisure Sport</li>
                    <li>Pattern :  Solid</li>
                    <li>Fit : Regular Fit</li>
                    <li>Material : 60%Cotton40%Polyester</li>
                    <li>Sleeves : Half Sleeves</li>
                </ul>
            
             <div>
                <span>Compare with similar items</span> 
             </div>   
             <div className="spaceing">
                 <span >New (6) from <span className="red-normal">$47.99</span></span>   
             </div>

             <hr/>
             <div>
                 <h4>Similar item from our brands</h4>
                 <div className="flex spaceing ">
                     <div>
                         <img src={require('./images/pic3.jpg')} alt=""/>
                    </div>
                    <div className="normal">
                        <span>
                        Van Heusen Men's Regular Fit Polo Shirt
                        </span>
                        <span className="red-normal image-size">
                            $33.99
                            <img src="./images/prime.png" alt=""/>
                        </span>
                        <div className=" star-row">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            < span>
                                (186)
                            </span>
                        </div>
                    </div>
                    
                 </div>
             </div>
            </div>
            <div className="right-fill">
                <div id="right-upper-container">
                        <p><span className="red-big">$47.99</span><br/>
                            + No Import Fees Deposit &
                            $14.51 Shipping to Israel
                        </p>
                        <span>Details</span>
                        <i className="arrow2 down"></i>

                        <div id="deliveryMessageMirId">
                            <p>
                                Arrives: <span className="bold"> Feb 26 - March 3 </span> 
                            </p>
                        </div>
                        <div className="spaceing">
                            <p>
                                <span className="green-big">In Stock</span> 
                            </p>
                        </div>
                        <div className="spaceing-big select-dropdown btn-backround">
    
                            <label for="">Qty: 1</label>
                            <select name="" id="">

                            </select>
                        </div>
                        <div id="buttons" className="btn spaceing-big">
                            <div>
                                <button>Add to Cart</button>
                            </div>
                            <div>
                                <button>Buy Now</button>
                            </div>
                        </div>
                        <div className="spaceing-big" id="lock">
                            <img src="./images/lock.png" alt=""/>
                            <span>Secure transaction</span>
                        </div>

                        <table id="Amazon-com" className="spaceing">
                            <tr>
                                <td>Ships from</td>
                                <td>Amazon.com</td>
                            </tr>
                            <tr>
                                <td>Sold by</td>
                                <td>Amazon.com</td>
                            </tr>
                        </table>

                        <div className="spaceing-big ">
                            <h4>
                                Add other items: 
                            </h4>
                        </div>
                        <div className="spaceing flex">
                            <div>
                                <input type="radio"/>
                            </div>
                            <div>
                                <span>Van Heusen Athleisure Men Polo T-Shirt ..</span>
                                <p style={{display: "inline"}}><span className="red-normal">$9.99</span> </p>
                            </div>
                        </div>
                        <div className="spaceing flex">
                            <div>
                                <input type="radio"/>
                            </div>
                            <div>
                               <p>Add a gift receipt for easy returns</p>
                            </div>
                        </div>
                        <hr className="hr-normal"/>
                        <div className="spaceing-big" id="israel-deliver">
                            <i className="fas fa-map-marker-alt" style={{color: "grey"}}/>
                            <span> Pincode</span>
                        </div>
                        <hr style={{ marginTop: "7px"}} className="hr-normal spaceing-small"/>
                        <button className="spaceing-big" id="add-to-the-list">
                            Add to the list
                        </button>
                </div>
                <div id="right-middle-container">
                    <p>New (2) from <span className="red-normal">$47.99</span> Free Delivery on first order</p>
                    <i className="arrow3 right"></i>
                </div>

                <ul className="spaceing-big list-icons">
                    <li><span>Other Seller on Amazon</span></li>
                    <li><img src="./images/facebook.png" alt=""/></li>
                    <li><img src="./images/twitter.png" alt=""/></li>
                    <li><img src="./images/pintrest.png" alt=""/></li>
                </ul>
                <div id="right-down-container" className="spaceing">
                    <div id="right-down-image">
                        <img src="./images/cable.jpg" alt=""/>
                    </div>
                    <div className="right-down-content">
                        <p>
                            USB 3.0 Micro Cable,ITANDIA
                            3.3ft USB 3.0 A to Micro B...
                        </p>
                        <div className="star-row">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span className="small-text">4,162</span>
                        </div>
                        <span className="font-sm-gray" >$6.99</span>
                        <img src="./images/prime.png" alt=""/>
                    </div>

                </div>
            </div>
        </div>
            <hr/>
            <div className="low-content">
                <h4>
                    Frequently bought together
                </h4>

                <div className="flex" id="plus-position">
                    <div className="images-plus">
                        <img src={require('./images/pic2.jpg')} alt=""/>
                            <div className="plus">
                                +
                            </div>
                        <img src={require('./images/pic3.jpg')} alt=""/>
                            <div className="plus">
                                +
                            </div>
                        <img src={require('./images/pic4.jpg')} alt=""/>
                    </div>
                    <div className="right-chunk">
                       <p className="font-sm-gray">Total price: <span className="red-big">$66.27</span></p>
                       <div className="spaceing btn2 orange">
                           
                                <button >Add all three to Cart</button>
                           
                       </div>
                       <div className="spaceing btn2 grey">
                               <button>Add all three to List</button>
                       </div>
                    </div>
                </div>
                
                    <div className="flex spaceing">
                        <input type="radio"/>
                        <p className="right-table">This item: Van Heusen Men's Regular Fit Polo Shirt <span className="red-normal">₹489.00</span> </p>
                    </div>
                    <div className="flex spaceing link-style">
                        <input type="radio"/>
                        <span className="right-table">Van Heusen Men Polo T-Shirt - 100% Combed Cotton - Varsity Inspired, Short Sleeve, Dual Coloured Collar
 <span className="red-normal">₹779.00</span></span>
                    </div>
                    <div className="flex spaceing link-style">
                        <input type="radio"/>
                        <span className="right-table ">Van Heusen Athleisure Men Polo T-Shirt - Cotton Rich - Ultra Soft, Short Sleeve, Textured
 <span className="red-normal">₹949.00</span></span>
                    </div>

            </div>
            <hr style = {{width:"95vw" , marginLeft : "10px"}}></hr>
        </main>
  )
}

export default Item