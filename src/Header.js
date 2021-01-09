import React from 'react'
import './Header.css'
import imageLogo from './img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'
import { auth } from './firebase';


const Header = () => {
    
    const [ {basket, user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

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
                <Link to={!user && '/sign-in'}>
                    <div className="header-option" onClick={handleAuthenticaton}>
                        <span className="header-optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header-optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
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
