import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
    render() {
        return (
        <div className="d-flex">
            <div className= "z-index-1 position-absolute ">
                <h1 className="display-4 font-weight-bold text-white text-shadow mt-5 ml-5" >Welcome your new bundle of joy </h1>
            </div>
            <div>
             <img className="position-absolute w-100 "  width="" src="https://images.unsplash.com/photo-1534806391029-791d2695c38b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="img-fluid" alt="Empty Baby Basket" />
        </div>
            
        </div>
        );
    }
}

export default Header;