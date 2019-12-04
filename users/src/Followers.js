import React from 'react';




function Followers(props) {
    console.log('props from Followers', props)

    return(
        <div>
            <h2>{props.followers.login}</h2>
            {props.followers.map(follower => (
                <div key= {follower.id}>
                    <img src = {follower.avatar_url} alt = {follower.login} />
                    <h2>{follower.login}</h2>
                    <h4>{follower.bio}</h4>
                </div>
            ))}
            
        </div>
    )
}

export default Followers;

// axios.get(i.url)
          // .then(res => {
          //   // console.log(res) 
          //   this.setState({followers:  [...this.followers, res.data]})})

// this.followers = res.data;

// this.followers.map(i => {
          
          
// })

// axios
// .get('https://api.github.com/users/Schrese/followers')
//       .then(res => {
//         // console.log('followers array', res)
//         this.followers = res.data;
        
//         console.log('Where amd i breaking?', res.data)
//         this.followers.map(i => {
//           console.log('What am I?', i)
//           return(        
//           axios.get(i.url)
//           .then(res => {
//             console.log(res.data) 
//             this.setState({followers: [res.data]})})
//         )
//         })
//         console.log('followers', this.followers)
//       })
//       .catch(err => console.log('why you have no friends?', err))



//the new way
// axios
//       .get('https://api.github.com/users/Schrese')
//       .then(res => {  
//         axios
//           .get(res.data.followers_url)
//           .then(resp => {
//             console.log('first', resp)
//             resp.data.forEach(f => {
//               axios 
//                 .get(f.url)
//                 .then(r => {
//                   console.log('second', r)
                  
//                   this.setState({
//                     followers: r.data
//                   })
//                 })
//             })
//           })
        
//       })