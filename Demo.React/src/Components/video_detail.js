import React, { Component } from 'react';

class VideoDetail extends Component {
    videoID;
    url;
    constructor({ video }) {
        super(video);
    }
    render() {
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