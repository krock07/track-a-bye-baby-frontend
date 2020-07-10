import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'



import Users from './components/Users';
import Header from './components/Header'
import Logo from './components/Logo/Logo'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Logo />
        <Nav />
        <Header />
        <Users />
        <header className="App-header">
          
          
        </header>
      </div>
    );
  }
}
  

export default App;
