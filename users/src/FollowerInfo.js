import React, {Component} from 'react';

// import Followers from './Followers';

class FollowerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followerInfo: []
        }
        console.log(props.followers);
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default FollowerInfo;