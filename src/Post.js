import React, {Component} from 'react';

class Post extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.post.title.title}</h2>
                <p>{this.props.post.message.message}</p>
            </div>
        );
    }
}

export default Post;