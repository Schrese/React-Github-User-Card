import React from 'react';
//   componentDidMount() {
//     axios
//       .get('https://api.github.com/users/Schrese/followers')
//       .then(res => {
//       console.log(res)
//     //res.data
//       this.setState({
//         myFollowers: res.data
//     })
//   })
//   .catch(err => console.log(err, 'what have you done?'))
// }
function User(props) {
    console.log(props);
    return(
        <>
            {/* {props.user.map(user => ( */}
                <div>
                    <h1>something</h1>
                </div>
             {/* ))} */}
        </>

    )
}

export default User;