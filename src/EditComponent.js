import React, {Component} from 'react';
import {connect} from 'react-redux'

class EditComponent extends Component {
    handleEdit = (event) => {
        event.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        };
        console.log("editing....")
        console.log(data);
        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.post.id,
            data: data
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.post.title.title} placeholder="Enter new title"/>
                    <br/><br/>
                    <textarea required rows="5" cols="28" ref={(input) => this.getMessage = input}
                              defaultValue={this.props.post.message.message} placeholder="Enter new post"/>
                    <br/><br/>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);