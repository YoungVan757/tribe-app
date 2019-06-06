import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default class Messages extends Component {
  render() {
    return <div className="message__container">
      <div className="message__button">
          <Link to="/message"className="message__new">new message</Link>
          </div>
          <div className="members__body">
            <div className="members__row1">
                <div className="members__favs"><div class="messages__heading">Message:</div><br></br>Dude surf was so butter!<br></br><Button className="button__post">delete message</Button>
                </div>
                <Link to="/message" class="members__write1"><img width="230" height="230" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy4xMjcgMjIuNTY0bC03LjEyNiAxLjQzNiAxLjQzOC03LjEyNSA1LjY4OCA1LjY4OXptLTQuMjc0LTcuMTA0bDUuNjg4IDUuNjg5IDE1LjQ2LTE1LjQ2LTUuNjg5LTUuNjg5LTE1LjQ1OSAxNS40NnoiLz48L3N2Zz4="></img></Link>
                <div className="messages__user1"></div>
            </div>
            <div className="members__line1"></div>
            <div className="members__row2">
                    <div class="members__favs"><div class="messages__heading">Message:</div><br></br>lmao saw that on Twitter<br></br><Button className="button__post">delete message</Button>
                    </div>
                    <Link to="/message" class="members__write2"><img width="230" height="230" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy4xMjcgMjIuNTY0bC03LjEyNiAxLjQzNiAxLjQzOC03LjEyNSA1LjY4OCA1LjY4OXptLTQuMjc0LTcuMTA0bDUuNjg4IDUuNjg5IDE1LjQ2LTE1LjQ2LTUuNjg5LTUuNjg5LTE1LjQ1OSAxNS40NnoiLz48L3N2Zz4="></img></Link>
                    <div className="messages__user2"></div>
            </div>
            <div className="members__line2"></div>
            <div className="members__row3">
                    <div className="members__favs"><div class="messages__heading">Message:</div><br></br>Hey it was good seeing you today!<br></br><Button className="button__post">delete message</Button>
                    </div>
                    <Link to="/message" class="members__write3"><img width="230" height="230" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy4xMjcgMjIuNTY0bC03LjEyNiAxLjQzNiAxLjQzOC03LjEyNSA1LjY4OCA1LjY4OXptLTQuMjc0LTcuMTA0bDUuNjg4IDUuNjg5IDE1LjQ2LTE1LjQ2LTUuNjg5LTUuNjg5LTE1LjQ1OSAxNS40NnoiLz48L3N2Zz4="></img></Link>
                    <div className="messages__user3"></div>
            </div> 
          </div>
    </div>;
  }
}
