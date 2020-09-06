import React from 'react';

import {
  Container,
  VideoRow,
  Divider
} from './styles';

import Ads from '../Ads';
import Video from '../Video';
import { loadVideos } from '../../Services/timeline-videos-api';

const VideoFeed: React.FC = () => {

  const data = loadVideos();

  return (
      <Container>
          {/* <Ads /> */}
          <VideoRow>
            {data.map(video => (
              <Video
                key={video.id}
                thumbnail={video.thumbnail}
                channelName={video.channelName}
                channelPhoto={video.channelPhoto}
                viewCount={video.viewCount}
                uploadedDate={video.uploadedDate}
                videoTitle={video.videoTitle}
                isChannelVerified={video.isChannelVerified}
              />
            ))}           
          </VideoRow>
          <Divider />
      </Container>
  );
}

export default VideoFeed;