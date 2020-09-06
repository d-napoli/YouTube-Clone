import React from 'react';

import {
    Container,
    VideoImage,
    VideoBody,
    VideoDescription,
    VideoChannelPhoto,
    VideoTitle,
    ChannelName,
    ViewsCount,
    UploadedTime,
    VideoInfoWrapper,
    Wrapper,
    TittleWrapper,
    MoreInfoIcon,
    VerifiedIcon
} from './styles';

export interface Props {
    thumbnail: string;
    channelName: string;
    channelPhoto: string;
    viewCount: string;
    uploadedDate: string;
    videoTitle: string;
    isChannelVerified?: boolean;
}

const Video: React.FC<Props> = ({
    thumbnail,
    channelName,
    channelPhoto,
    viewCount,
    uploadedDate,
    videoTitle,
    isChannelVerified
}) => {
    return (
        <Container>
            <Wrapper>
                <VideoImage src={thumbnail} />
            </Wrapper>
            <VideoBody>
                <VideoDescription>
                    <VideoChannelPhoto src={channelPhoto} />
                    <VideoInfoWrapper>
                        <TittleWrapper>
                            <VideoTitle>{videoTitle}</VideoTitle>
                            <MoreInfoIcon />
                        </TittleWrapper>
                        <Wrapper>
                            <ChannelName>{channelName}</ChannelName>
                            {
                                isChannelVerified ?
                                <VerifiedIcon /> :
                                null
                            }
                        </Wrapper>
                        <Wrapper>
                            <ViewsCount>{viewCount}</ViewsCount>
                            <UploadedTime>{uploadedDate}</UploadedTime>
                        </Wrapper>
                    </VideoInfoWrapper>
                </VideoDescription>
            </VideoBody>
        </Container>
    );
}

export default Video;