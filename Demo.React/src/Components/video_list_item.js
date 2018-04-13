import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imageUrl = this.props.video.snippet.thumbnails.default.url;
        return (
            <li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left video-item">
                        <img className="media-object"  src={imageUrl}/>
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