import styled, { css } from 'styled-components';

import {
    AiFillHome,
    AiFillPlaySquare,
    AiFillClockCircle,
    AiFillLike,
    AiFillQuestionCircle,
    AiFillFlag
} from 'react-icons/ai';

import {
    MdSubscriptions,
    MdVideoLibrary,
    MdHistory,
    MdSettings
} from 'react-icons/md';

export const Container = styled.div`
    height: 100%;
    background-color: var(--primary-light);
    width: 240px;
    margin-top: 56px;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;

    @media screen and (max-width: 768px) {
        width: 75px;
    }
`;

export const SidebarSection = styled.ul`
    border-bottom: 1px solid var(--hover);
    width: 100%;
    padding: 12px 0;

    @media screen and (max-width: 768px) {
        &.desktopOnly {
            display: none;
        }
    }
`;

type IsListActive = { listActive?: boolean }

export const SidebarList = styled.li<IsListActive>`
    padding: 8px 24px;
    color: var(--color-white);
    align-items: center;
    cursor: pointer;
    display: flex;

    background-color: ${props => props.listActive ? 'var(--list-active)' : 'transparent'};

    &:hover {
        background-color: ${props => props.listActive ? 'var(--list-active-hover)' : 'var(--hover)'};
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        > span {
            padding-top: 5px;
            text-align: center;
            font-size: 10px;
            color: var(--descriptions);
        }
    }
`;

const iconCSS = css`
    width: 22px;
    height: 22px;
    color: var(--color-white);

    @media screen and (min-width: 768px) {
        margin-right: 25px;
    }
`;

export const HomeIcon = styled(AiFillHome)` ${ iconCSS }; `;
export const SubscriptionIcon = styled(MdSubscriptions)` ${ iconCSS }; `;
export const LibraryIcon = styled(MdVideoLibrary)` ${iconCSS}; `;
export const HistoryIcon = styled(MdHistory)` ${iconCSS}; `;
export const YourVideosIcon = styled(AiFillPlaySquare)` ${iconCSS}; `;
export const WatchLaterIcon = styled(AiFillClockCircle)` ${iconCSS}; `;
export const LikedIcon = styled(AiFillLike)` ${iconCSS}; `;
export const SettingsIcon = styled(MdSettings)` ${iconCSS}; `;
export const HelpIcon = styled(AiFillQuestionCircle)` ${iconCSS}; `;
export const ReportingHistoryIcon = styled(AiFillFlag)` ${iconCSS}; `;

export const SidebarTitle = styled.h3`
    text-transform: uppercase;
    padding: 10px 24px;
    font-size: 13px;
`;

export const ChannelAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    margin-right: 25px;
`;

export const ChannelName = styled.div`
    color: var(--color-white);
`;
