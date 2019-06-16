import React, { Component } from 'react';
import Button from '../components/PostButton';
import Arrows from '../components/Arrows';
import Trash from '../components/Trash';
import Flag from '../components/Flag';
import firebase from '../firebase';

export default class CommentBox extends Component {
    constructor(props) {
        super(props) ;
        this.state={
            comment:'',
            comments:[]
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        firebase
            .database()
            .ref('/comments')
            .once('value')
            .then(snapshot=>{
                const comments = snapshot.val();
                this.setState({
                    comments
                });
            });
    }

    saveComment(){
        const database = firebase.database();
        const iD = Date.now();
        database
            .ref(`/comments/${iD}`)
            .set({
                comment: this.state.comment
            })
            .then( ()=> {
                this.fetchData();
            });
    }

    renderComments(){
        const comments = 
        this.state.comments &&
        Object.keys(this.state.comments).map(k=>{
            const singleComment = this.state.comments[k];
            return ( 
                <div className='comment__box'>
                    {singleComment.comment} <div className="user__img">
                    </div>
                    <Arrows />
                 <Flag />
                 <Trash/>
                </div>
               
            )
        });
        return comments;
    }

    render() {
        return (
    <div className="comment__container">
        <div>  
            <div className="comment">
                    <div className="comment__functions">
                        <div className="comment__input--avatar">
                            <input onChange={e=> this.setState({ comment: e.target.value})} type="text" 
                            placeholder="type" 
                            class="comment__input"/>
                            <div className="comment__avatar"></div>
                        </div>
                        <div className="comment__buttons">
                            <button onClick={()=>{this.saveComment()}} className="comment__post" title="post" fontSize="14px">post</button>
                           
                        </div>
                        
                    </div>
                    
            </div>
                
        </div>          
            
            
        <div >
           {this.renderComments()} 
        </div>

        </div> 
        
        
        );
}
}
