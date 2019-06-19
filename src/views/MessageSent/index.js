import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class MessageSent extends Component {
    render() {
    return(
        <div>
            Message sent.
            <Link to='/messages'>Back to messages</Link>
        </div>
    )
}
}

