import React from 'react';
import VideoItem from '../video_item/video_item';
import styled from 'styled-components';

const Wrapper = styled.div `
`
const Youtubelist = styled.ul `
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`


const VideoList = props => (
  <Wrapper>
    <Youtubelist>
      {props.videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </Youtubelist>
  </Wrapper>
);

export default VideoList;
