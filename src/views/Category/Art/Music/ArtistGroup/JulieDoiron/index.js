import React, { Component } from "react";
import Favs from "../../../../../../components/Favs";
import TribeNameComponent from "../../../../../../components/TribeNameComponent";
import TribeProfileImg from "../../../../../../components/TribeProfileImg";
import CommentBox from "../../../../../../components/CommentBox";

export default class Grouper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tN = 'Julie Doiron'
    return (
      <div className="containter">
        <div className="profile">
          <div className="hero">
            <div className="interact">
              <Favs tribeName={tN} />
            </div>
            <div className="name__container">
              <TribeNameComponent
                tribeName={tN}
                headLine="Member of Eric's Trip who became a seminal songwriter"
                classN="profile__img"
              />
            </div>
          </div>
          <TribeProfileImg
            tribeName={tN}
            classN="profile__img"
            url="https://i1.wp.com/julie-doiron.com/wp-content/uploads/2019/06/juliedoiron051-768x512.png?resize=768%2C512&ssl=1
            "
          />
        </div>
        <CommentBox tribeName={tN} />
      </div>
    );
  }
}
