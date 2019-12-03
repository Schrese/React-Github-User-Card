import React from 'react';

function Followers(props) {

    return(
        <div>
            {props.followers.map(follower => (
                <div key= {follower.id}>
                    <img src = {follower.avatar_url} alt = {follower.login} />
                    <h2>{follower.login}</h2>
                </div>
            ))}
            
        </div>
    )
}

export default Followers;
    // <img src={props.followers.avatar_url} alt = {props.followers.id}/>
    // <h2>{props.followers.login}</h2>