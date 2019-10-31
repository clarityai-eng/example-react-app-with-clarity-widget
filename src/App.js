import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClarityWidget from './components/ClarityWidget'

class App extends React.Component {
  constructor() {
    super();
    this.state = {fund: 'LU0147308422'};
    this.handleFundChange = this.handleFundChange.bind(this);
  }

  handleFundChange(event) {
    this.setState({fund: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is an example app on how to use Clarity Widget with ReactJS</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <form >
            <label>
              Fund: <input type="text" value={this.state.fund} onChange={this.handleFundChange} />
            </label>
          </form>
          <ClarityWidget fund={this.state.fund}/>
        </div>
      </div>
    );
  }
}

export default App;
