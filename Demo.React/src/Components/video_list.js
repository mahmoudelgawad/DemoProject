import React, { Component } from 'react';
import VideoListitem from './video_list_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const videolistItems = this.props.videos.map((video) => {
            return (
                <VideoListitem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect}/>
            );
        });
        return (
            <ul className="col-md-4 list-group">
                {videolistItems}
            </ul>
        );
    }
}

export default VideoList;