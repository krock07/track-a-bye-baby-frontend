import React, { Component } from 'react';
import baby from '../../public/images/baby'

class Header extends Component {
    render() {
        return (
            <div>
             <img src={baby} class="img-fluid" alt="Empty Baby Basket" />   
            </div>
        );
    }
}

export default Header;