import React, { Component } from 'react';
import YoutubeBackground from 'react-youtube-background';
import Clock from './Clock';


class Banner extends Component {
    state = {
        deadline: 'July 20, 2020',
        videoId: 'auJu-xO6LPE'
    }

    render() {
        return (
            <YoutubeBackground className="video-margin" videoId={this.state.videoId} >
                <div className="banner">
                    <div className="banner__cd-timer">
                        <Clock deadline={this.state.deadline} />
                    </div>
                </div>
            </YoutubeBackground>
        );
    }
}

export default Banner;