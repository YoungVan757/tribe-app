import React, { Component } from 'react';
import Arrows from '../components/Arrows';
import Trash from '../components/Trash';
import Flag from '../components/Flag';
import firebase from '../firebase';

export default class CommentBox extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            tribepage: {},
            tribecomment:'',
            tribecomments:[],
            users:'',
            user:'',
            username: '',
            uid:'',
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        firebase
            .database()
            .ref('/tribepage/')
            .once('value')
            .then(snapshot => {
                const tribecomments = snapshot.val();
                this.setState({
                    tribecomments
                });
            });
    }

    saveComment() {
        const database = firebase.database();
        const commentId = Date.now();
        const username = window.localStorage.getItem('tribe_username');
        const uid = window.localStorage.getItem('tribe_uid')

        const databaseSet = {};

        databaseSet[`/tribepage/tribecomments/${commentId}/tribecomment/`] = this.state.tribecomment;
        databaseSet[`/tribepage/tribecomments/${commentId}/author/`] = username

        databaseSet[`/users/${uid}/tribepagecomments/tribecomment`] = this.state.tribecomment;
        databaseSet[`/users/${uid}/tribepagecomments/tribepage`] = this.state.tribecomment;

        database
            .ref()
            .update(databaseSet)
            .then(() => {
                this.fetchData();
            });
        }

    deleteComment(commentId) {
        const updates = {};
        updates[`/tribepage/tribecomments${commentId}`] = null;
    
        firebase
          .database()
          .ref()
          .update(updates)
          .then(() => {
            this.fetchData()
          })
    
      }
    renderComments(){
        const tribecomments = 
        this.state.tribecomments &&
        Object.keys(this.state.tribecomments).map( k => {
            const singleComment = this.state.tribecomments[k];
            return ( 
                <div className='comment__box'>
                    {singleComment.tribecomment} <div className="user__img">
                    </div>
                    <Arrows />
                 <Flag />
                 <Trash deleteComment={() => this.deleteComment(k)}/>
                </div>
               
                     );
                 });
        return tribecomments;
    }
    render() {
        return (
         <div className="comment__container">
             <div>  
               <div className="comment">
                    <div className="comment__functions">
                    <div className="comment__avatar"></div>
                        <div className="comment__input--avatar">
                            <input 
                                onChange={e=> this.setState({ tribecomments: e.target.value})} 
                                type="text" 
                                placeholder="type" 
                                className="comment__input"
                            />
                            <button 
                                onClick={()=>{this.saveComment()}} 
                                className="comment__post" 
                                title="post" 
                                fontSize="14px"
                            >
                                post
                            </button>        
                        </div>  
                         <div >{this.renderComments()}</div>     
                    </div>       
            </div>     
        </div>                   
        </div>       
        );
    }
}
