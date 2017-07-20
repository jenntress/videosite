// this container replaces the ReactPlayer with our own functions and state

import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import { findDOMNode } from 'react-dom';
import screenfull from 'screenfull';

class VideoPlayerContainer extends Component {

  state = {
    playing: false,
    width: '640',
    height: '360',
  }

  playPause = () => {
    this.setState({playing: !this.state.playing})
  }
  stopVideo = () => {
    this.setState({url: null, playing: false})
  }
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.refs.player))
    this.setState({width: '100%', height: '100%'})
// sample from Cody's project - how do we listen for the keycode - lines 26 & 28 below
    const key = document.querySelector(`.key[data-key='${$e.keycode}']`)
//    if e.keycode is 27 then setstate back to the proper width height
    window.addEventListener('keydown', playSound);
  }

  const keys = document.querySelectorAll('.key');
      keys.forEach(key => key.addEventListener('transitionend', removeTransition))
      window.addEventListener('keydown', playSound);

  render(){
    return (
      <div>
        <ReactPlayer
           url={this.props.videoURL}
           playing={this.state.playing}
           ref='player'
           width={this.state.width}
           height={this.state.height}
        />
        <div className="form-group">
          <button className="btn btn-sm" onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
          <button className="btn btn-sm" onClick={this.stopVideo}>Stop</button>
          <button className="btn btn-sm" onClick={this.onClickFullscreen}>Fullscreen</button>


        </div>
      </div>
    )
}
}

export default VideoPlayerContainer;
