import React from 'react';

import YouTubeLogo from '../../../assets/images/youtube-logo-white-small.png';

import {
    YouTubeImage
} from './styles';

const logo = () => {
    return (
        <YouTubeImage src={YouTubeLogo} alt="YouTube Logo Small" />
    );
}

export default logo;