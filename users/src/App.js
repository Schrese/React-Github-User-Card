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

    axios
      .get('https://api.github.com/users/Schrese/followers')
      .then(res => {
          // console.log('followers array', res)
        this.followers = res.data;
          
        console.log('Where amd i breaking?', res.data)
        var newArray = this.followers.map(i => {
          console.log('What am I?', i)
          return(  
                  
          axios.get(i.url)
          .then(res => {
             console.log(res.data) 
            this.setState({followers: [res.data]})})
        )
        })
        console.log('followers', newArray)
      })
        .catch(err => console.log('why you have no friends?', err))
    
    //friends list that works
    // axios 
    //   .get('https://api.github.com/users/Schrese/followers')
    //   .then(res => {
    //     console.log('followers array', res)
    //     this.setState({
    //       followers: res.data
    //     })
        
    //   })
    //   .catch(err => console.log('error in friends axios', err))
  }
  
  render() {
  return (
    <div className="App">
      <h1>Github Project</h1>
      <Mine user = {this.state.user} />
      <h2>Followers: </h2>
      <Followers followers = {this.state.followers} /> 
    </div>
  );
  }
  
}

export default App;
