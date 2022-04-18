import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div `
  width: 50%;
  padding: 0.2em;
`
const Youtubebox = styled.li `
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  cursor: pointer;
  transition: transform 250ms ease-in;
  box-shadow: 3px 3px 5px 0 rgb(191, 191, 191, 0.53);
  &:hover {
    transform: scale(1.02)
  }

  .Thumbnail {
    width: 40%;
    height: 100%;
  }
`
const Metadata = styled.div `
  margin-left: 0.2em;
  
  .Title, 
  .ChannelTitle {
    margin: 0;
    font-size: 0.8rem;
  }

  .ChannelTitle {
    font-size: 0.6rem;
  }
`

const VideoItem = ({ video : {snippet}} ) => (
  <Wrapper>
    <Youtubebox>
      <img className='Thumbnail' src={snippet.thumbnails.medium.url} alt="video thumbnail" />
      <Metadata>
        <p className='Title'>{snippet.title}</p>
        <p className='ChannelTitle'>{snippet.channelTitle}</p>
      </Metadata>
    </Youtubebox>
  </Wrapper>
);
export default VideoItem;
