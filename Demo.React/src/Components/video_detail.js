import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        this.video = this.props.video;
        if (!this.video) {
            return <div>Loading...</div>;
        } 

        this.videoID = this.video.id.videoId;
            this.url = "https://www.youtube.com/embed/" + this.videoID;
            return (
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={this.url}></iframe>
                    </div>
                    <div className="details">
                        <div>{this.video.snippet.title}</div>
                        <div>{this.video.snippet.description}</div>
                    </div>
                </div>
            );
    }
}

export default VideoDetail;