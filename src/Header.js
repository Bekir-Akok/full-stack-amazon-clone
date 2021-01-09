import React from 'react'
import './Header.css'
import imageLogo from './img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'


const Header = () => {
    
    const [ {basket}, dispatch] = useStateValue();
    
    return (
        <div className="header">
            <Link to ="/">
                <img className="header-logo" src={imageLogo}/> 
            </Link>     
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon  className="header-searchIcon" />
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header-optionLineTwo">
                        Sıgn in
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineTwo">
                        Order
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Your
                    </span>
                    <span className="header-optionLineTwo">
                        Prime
                    </span>
                </div>
                    <Link to="/checkout">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
                    </div>
                    </Link>
            </div>
        </div>
    )
}

export default Header
