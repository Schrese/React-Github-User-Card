import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

//components
import Mine from './Mine';
import Followers from './Followers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}, 
      followers: [], 
      newText: ''
    }
  }

  componentDidMount() {
    //my own profile
    axios
      .get('https://api.github.com/users/Schrese')
      .then(res => {
        // console.log(res)
        this.setState({
          user: res.data
        })
      }) 
      .catch(err => console.log('axios call in componentdidmount', err))
      //this isn't working!!!!!
    axios.get('https://api.github.com/users/Schrese')
      .then(res => {
        axios
          .get(res.data.followers_url)
          .then(resp => {
            console.log('uhhhhhhh', resp.data);
            // this.setState({
            //   followers: resp.data
            // })
            let something = resp.data;
            something.map(i => (
              this.setState({newText: i.login})
            ))
          })
      })
        .catch(err => console.log('why you have no friends?', err))
        
    // friends list that works
    axios 
      .get('https://api.github.com/users/Schrese/followers')
      .then(res => {
        console.log('followers array', res)
        this.setState({
          followers: res.data
        })
        
      })
      .catch(err => console.log('error in friends axios', err))
  }
  

  render() {
  return (
    <div className="App">
      <h1>Github Project</h1>
      <Mine user = {this.state.user} />
      <h2>Followers: </h2>
      <div className = 'cardcontain'>
        <Followers followers = {this.state.followers} /> 
        {/* <Followers newText = {this.state.newText} />  */}
      </div>
    </div>
  );
  }
  
}

export default App;
