import React from 'react'
import "./style.css"

const Header = () => {
  return (
        <header>
        <nav id="navbar">
            <div id="nav-belt">
                <div className="nav-left">
                    
                    <div id="nav-logo" className="border">
                        <img src={require('./images/amazon-logo.png')} alt = 'logo'/>
                    </div>


                    <div id="nav-global-location-slot" className="border flex flex-center"> 
                        <div className="flex flex-center" id="nav-global-location-popover-link">
                            <div className="flex" id="nav-global-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div id="glow-ingress-block">
                                <p className="font-sm-gray">Deliver to</p>    
                                <p className="font-md-white">India</p>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-fill">
                    <div id="nav-search">

                        <div id="nav-search-dropdown-card">
                            <form >
                                <label for="">All</label>
                                <select  >
                                    <option value="" ></option>
                                </select>
                            </form>
                        </div>
                        <div className="nav-search-middle">
                            <input type="text" name="" id=""/>
                        </div>

                    </div>
                </div>
                <div className="nav-right">
                    <div id="america-icon" className="border right-box">
                        <div id="flag">
                        <img src={require('./images/flag.png')} alt=""/>
                        <i className="arrow"></i>
                        </div>
                    </div>
                    <div id="middle-right-box" className="border right-box">
                            <div className="middle-box-position">
                                <p className="font-sm-gray white">Hello, sign in</p>
                                <p className="font-md-white">Account & Lists <i className="arrow"></i> </p>
                            </div>
                    </div>
                    <div id="middle-right-right-box" className="border right-box">
                        <div className="middle-box-position">
                            <p className="font-sm-gray white">Returns</p>
                            <p className="font-md-white">& Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav id="navbar2">
            <div>
                <span className="border">All</span>
                <span className="border">Amazon miniTV</span>
                <span className="border">Best Sellers</span>
                <span className="border">Mobiles</span>
                <span className="border">Today's Deals</span>
                <span className="border">Customer Service</span>
                <span className="border">Amazon Pay</span>
                <span className="border">Home & Kitchen</span>
                <span className="border">Computers</span>
                <span className="border">Books</span>
                <span className="border">Coupons</span>
                <span className="border">Fashion</span>
                <span className="border">Electronics</span>
                <span className="border">Beauty & personal Care</span>
                <span className="border">New Realease</span>
            </div>
            <div>
            <span className="border">
                Prime
            </span>  
            </div>
        </nav>
        <nav id="navbar3">
            <span>Clothing & Accessories ›</span>
            <span>Men ›</span>
            <span>T-shirts & polo ›</span>
            <span>Polos</span>
        </nav>
    </header>
  )
}

export default Header