const postreducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? {...post, editing: !post.editing} : post);
        case 'UPDATE':
            console.log("updating...." + action.id);
            console.log("updating content... " + action.data.newTitle + "   " + action.data.newMessage);
            return state.map((post) => {
                console.log(post.title);
                console.log(post.message);
                console.log(post.editing);
                if (post.id === action.id) {
                    console.log("post found")
                    return {
                        ...post,
                        title:action.data.newTitle,
                        message:action.data.newMessage,
                        editing:!post.editing,
                    }
                } else {
                    return post;
                }
            });
        default:
            return state;
    }
};

export default postreducer;