import styled, { css } from 'styled-components';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Container = styled.div`
    display: flex;
    /* margin-left: 20px; */
    align-items: center;
    text-align: center;
    flex-direction: column;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        width: 98%;
        margin-left: calc((100vw - 98vw) / 1);

        &:not(:first-child) {
            margin-top: 30px;
        }
    }
 
    @media screen and (min-width: 700px) and (max-width: 1000px) {
        width: 48%;
        margin-left: calc((100vw - 98vw) / 2);
        margin-top: 35px;
    }

    @media screen and (min-width: 1000px) {
        width: 23%;
        margin-left: calc((100vw - 98vw) / 4);
        margin-top: 35px;
    }

`;

export const VideoImage = styled.img`
    display: flex;
    width: 100%;
    position: relative;
    flex-shrink: 0;

`;

export const VideoBody = styled.div`
    width: 100%;
`;

export const VideoDescription = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    width: 100%;
`;

export const VideoInfoWrapper = styled.div`
    text-align: left;
    padding-left: 15px;
    width: 100%;
`;

export const VideoChannelPhoto = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
`;

export const TittleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const MoreInfoIcon = styled(BiDotsVerticalRounded)`
    font-size: 25px;
    color: var(--descriptions);

    &:hover {
        color: var(--color-white);
    }
`;

export const VerifiedIcon = styled(AiFillCheckCircle)`
    color: var(--descriptions);
    margin-left: 5px;
`;

export const VideoTitle = styled.h4`
    width: 100%;
    margin-bottom: 5px;
    font-size: 15px;
`;

const descriptionsCSS = css`
    font-size: 13px;
    color: var(--descriptions);

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export const ChannelName = styled.p`
    ${descriptionsCSS};

    &:hover {
        color: var(--color-white);
        transition: 0.1s ease 0s all;
        cursor: pointer;
    }
`;

export const ViewsCount = styled.p`
    ${descriptionsCSS};

    &::after {
        content: "•";
        margin: 0 4px;
    }
`;

export const UploadedTime = styled.p`
    ${descriptionsCSS};
`;

export const Wrapper = styled.div`
    display: flex;
    position: relative;
`;