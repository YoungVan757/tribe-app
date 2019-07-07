import React, {Component} from 'react';
import firebase from 'firebase';

export default class Trash extends Component {
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
        this.state={
          comments:[]
        };
      }
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
    
        const uniqueId = '';
    
        firebase
          .database()
          .ref(`/comments/${this.state.comments.uniqueId}/comment`)
          .once('value')
          .then(snap=>{
            const comment = snap.val();
            this.setState({
              comment
            });
          });
      }


    
    deleteComment() {




        firebase.database().ref(`/comments/${Date.now()}`).remove();
        firebase.database().ref(`/tribes/car-tribe/comments/${Date.now()}`).remove();
    }

render() {
    return (
        <div>
            <button onClick={() => this.deleteComment()}>
            <img height='200px' margin="1%" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyA2djE4aDE4di0xOGgtMTh6bTUgMTRjMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTF2LTEwYzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXYxMHptNSAwYzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi0xMGMwLS41NTIuNDQ4LTEgMS0xczEgLjQ0OCAxIDF2MTB6bTUgMGMwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMXYtMTBjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjEwem00LTE4djJoLTIwdi0yaDUuNzExYy45IDAgMS42MzEtMS4wOTkgMS42MzEtMmg1LjMxNWMwIC45MDEuNzMgMiAxLjYzMSAyaDUuNzEyeiIvPjwvc3ZnPg=="></img>
        </button>
        </div>
    );
}
   
}