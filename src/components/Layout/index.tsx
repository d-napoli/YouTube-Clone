import React from 'react';

import {
  MainContent
} from './styles';

import Header from '../Header';
import Sidebar from '../Sidebar';
import VideoFeed from '../VideoFeed';

const Layout: React.FC = () => {
  return (
      <>
        <Header />
        <MainContent>
          <Sidebar />
          <VideoFeed />
        </MainContent>
      </>
  );
}

export default Layout;