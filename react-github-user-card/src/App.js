import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('https://api.github.com/users/Schrese')
    .then(res => {
    //res.data
      this.setState({
        schrese: res.data
    })
  })
  .catch(err => console.log(err, 'what have you done?'))
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Hello There
      </header>
    </div>
  );
  }
}

export default App;
