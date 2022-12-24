import React from "react";
import './Video.css';
import Video_img from '../../images/video_bg.jpg';
import Play_button from '../../images/play-button.png';
function Video(){
  return(
    <div className="Video">
        <img src={Video_img} width="100%" height="100%"/>
        <img src={Play_button} width="128px" height="128px" id="Play_button"/>
    </div>
  )
}

export default Video;