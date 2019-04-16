import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'You haven\'t clicked me yet',
      counter: 0
    }
  }

  updateState(){
    console.log('got here')
    this.setState({text: 'You have clicked me'})
    this.setState(prevState =>({
      counter: prevState.counter+1
    }));
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <button 
          onClick={ ()=>this.updateState() }>
            React +1
        </button>
          <p>{this.state.text} {(this.state.counter>0) ? this.state.counter: ""}  { (this.state.counter>0) ? 'times!' : ""}      
          </p>
          </header>
      </div>
    );
  }
}

export default App;
