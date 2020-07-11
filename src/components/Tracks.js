import React, { Component } from "react";


import './Tracks.css';
class Tracks extends Component {
  render() {
    return (
        <div class="row text-center">

      <div class="col-lg-12">
        <h1>Track Your Baby</h1>
        <br />
      </div>

      <div class="col-sm-4">
        <img class="image image--circle image--center" src="https://images.unsplash.com/flagged/photo-1570560558077-45ad028193e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80/300x300" alt=""/>
        <h2>Feeding</h2>
      </div>
      <div class="col-sm-4">
        <img class="image image--circle image--center" src="https://images.unsplash.com/photo-1564240042507-f0c521878d94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
        <h2>Diaper Change</h2>
      </div>
      <div class="col-sm-4">
        <img class="image image--circle image--center" src="https://images.unsplash.com/photo-1489087584469-437d40177a45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
        <h2>Sleep</h2>
      </div>
    </div>
      
    );
  }
}

export default Tracks;
