import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

//components
import Mine from './Mine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}, 
      followers: []
    }
  }

  componentDidMount() {
    //my own profile
    axios
      .get('https://api.github.com/users/Schrese')
      .then(res => {
        console.log(res)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log('axios call in componentdidmount', err))
    
    //friends list
    axios 
      .get('https://api.github.com/users/Schrese/followers')
      .then(res => {
        console.log('frinds array', res)
      })
      .catch(err => console.log('error in friends axios', err))
  }

  render() {
  return (
    <div className="App">
      <h1>Github Project</h1>
      <Mine user = {this.state.user} />
    </div>
  );
  }
  
}

export default App;
