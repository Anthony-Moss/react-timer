import React from 'react';
import './App.css';
import Timer from './Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      input: 0,
      status: false,
      done: false,
      adder: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>End time in seconds to use Timer!</h1>
          <Timer time={this.state.time} />
          {this.state.adder.map((one, i) => {
            return (
              <Timer time={this.state.time} key={i} />
            )
          })}
          <br></br>
          <button onClick={this._addTimer}>Add Timer</button>
        </header>
      </div>
    );
  }
  _addTimer = () => {
    this.addOne = 1
    this.setState({
      adder: this.state.adder.concat(this.addOne)
    })
  }
}


export default App;