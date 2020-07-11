import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'



import Users from './components/Users';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Tracks from './components/Tracks'

class App extends Component {

      
  
  render() {
    return (
      <div>
        <Navbar />
        <Nav />
        <Header />
        <Users />
        
      </div>
    );
  }
}
  

export default App;
