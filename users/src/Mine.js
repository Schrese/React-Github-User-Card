import React from 'react';

function Mine(props) {
    console.log('props from Mine', props)

    return(
        <div>
            <h2>{props.user.name}</h2>
            <h4>{props.user.location}</h4>
            <h4>{props.user.bio}</h4>
            <h4>Followers: {props.user.followers}</h4>
            <h4>Following: {props.user.following}</h4>
        </div>
    )
}

export default Mine;

