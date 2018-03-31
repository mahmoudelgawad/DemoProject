import React, { Component } from 'react';
import VideoListitem from './video_list_item';

class VideoList extends Component {
    videolistItems;
    constructor(props) {
        super(props);
    }
    render() {
        this.videolistItems = this.props.videos.map((video) => {
            return (
                <VideoListitem key={video.etag} video={video} />
            );
        });
        return (
            <ul className="col-md-4 list-group">
                {this.videolistItems}
            </ul>
        );
    }
}

export default VideoList;