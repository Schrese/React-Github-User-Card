import React, {Component} from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
  this.state = {
    myUser: {}, 
    myFollowers: []
  }
  }



componentDidMount() {
  axios
    .get('https://api.github.com/users/Schrese')
    .then(res => {
    console.log(res)
  //res.data
      this.setState({
        myUser: res.data
    })
  })
  .catch(err => console.log(err, 'what have you done?'))

    axios
      .get('https://api.github.com/users/Schrese/followers')
      .then(res => {
        // console.log(res)
        this.setState({
          myFollowers: res.data
        })
      })
  }

  render() {
  return (
    <div className="App">
      <div className = 'my-information'>
        <div>
          <img src = {this.state.myUser.avatar_url} alt = 'my avatar'/>
        </div>
        <div className = 'text'>
          <h2>{this.state.myUser.name}</h2>
          <h4>Followers: {this.state.myUser.followers}</h4>
          <h4>Following: {this.state.myUser.following}</h4>
          <p>Bio: {this.state.myUser.bio}</p>
        </div>
      </div>
      {/* <div>
        {this.state.githubusers.name(user => (
          <div>
            <img src = {user.avatar_url} key = {user.id} />
            <h3>{user.login}</h3>
          </div>
        ))}
      </div>  */}
      <div className = 'followers-information'>
        <h2>Followers: </h2>
        {this.state.myFollowers.map(coolPeople => (
          <div className = 'card'>
            <img src = {coolPeople.avatar_url} key = {coolPeople.id} alt = 'their avatars'/>
            <h3>{coolPeople.login}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  }
}

export default App;
