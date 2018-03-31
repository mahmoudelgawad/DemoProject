import React, { Component } from 'react';

class VideoListItem extends Component {
    imageUrl;
    constructor(props) {
        super(props);
    }
    render() {
        this.imageUrl = this.props.video.snippet.thumbnails.default.url;
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object"  src={this.imageUrl}/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                        {this.props.video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
export default VideoListItem;