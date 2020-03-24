import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new  Date(),
            title: {title},
            message: {message},
            editing: false,
        }
        console.log(data);

        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
    }
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref = {(input) => this.getTitle = input} placeholder="Enter post title"/> <br/><br/>
                    <textarea required rows="5" cols="28" ref = {(input) => this.getMessage = input} placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);