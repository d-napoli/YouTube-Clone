import React from 'react';

import {
    Container,
    SidebarSection,
    SidebarList,
    HomeIcon,
    SubscriptionIcon,
    LibraryIcon,
    HistoryIcon,
    YourVideosIcon,
    WatchLaterIcon,
    LikedIcon,
    SidebarTitle,
    ChannelAvatar,
    ChannelName,
    SettingsIcon,
    HelpIcon,
    ReportingHistoryIcon
} from './styles';

const Sidebar: React.FC = () => {
  return (
      <Container>
          <SidebarSection>
              <SidebarList listActive>
                  <HomeIcon />
                  <span>Home</span>
              </SidebarList>
              <SidebarList>
                  <SubscriptionIcon />
                  <span>Subscriptions</span>
              </SidebarList>
          </SidebarSection>
          <SidebarSection className="desktopOnly">
              <SidebarList>
                  <LibraryIcon />
                  <span>Library</span>
              </SidebarList>
              <SidebarList>
                  <HistoryIcon />
                  <span>History</span>
              </SidebarList>
              <SidebarList>
                  <YourVideosIcon />
                  <span>Your videos</span>
              </SidebarList>
              <SidebarList>
                  <WatchLaterIcon />
                  <span>Watch Later</span>
              </SidebarList>
              <SidebarList>
                  <LikedIcon />
                  <span>Liked Videos</span>
              </SidebarList>
          </SidebarSection>
          <SidebarSection className="desktopOnly">
              <SidebarTitle>
                  SUBSCRIPTIONS
              </SidebarTitle>
              <SidebarList>
                  <ChannelAvatar src="https://yt3.ggpht.com/a/AATXAJwTuzNgKRSLVIOcVTVGGr_xFKgo8LFSQF163hCKSQ=s176-c-k-c0x00ffffff-no-rj-mo" />
                  <ChannelName>PewDiePie</ChannelName>
              </SidebarList>
              <SidebarList>
                  <ChannelAvatar src="https://yt3.ggpht.com/a/AATXAJypifoUGWuymxZS_saMWH7bBdVh3lrFsUNLOEKQsA=s176-c-k-c0x00ffffff-no-rj-mo" />
                  <ChannelName>nigahiga</ChannelName>
              </SidebarList>
              <SidebarList>
                  <ChannelAvatar src="https://yt3.ggpht.com/a/AATXAJwDgpVJP_Y1SMK4RCghE5EkOTcVNyRsqlby-qRHkg=s176-c-k-c0x00ffffff-no-rj-mo" />
                  <ChannelName>Smosh</ChannelName>
              </SidebarList>
              <SidebarList>
                  <ChannelAvatar src="https://yt3.ggpht.com/a/AATXAJynkPnPVO1teU1292tS2f52lj5Tb0ZwM_ML4ounGg=s176-c-k-c0x00ffffff-no-rj-mo" />
                  <ChannelName>MrBeast</ChannelName>
              </SidebarList>
              <SidebarList>
                  <ChannelAvatar src="https://yt3.ggpht.com/a/AATXAJzuNU_HVtq_3MUoCGfE9BCP5V_r1OcKfr1s-TTLAQ=s176-c-k-c0x00ffffff-no-rj-mo" />
                  <ChannelName>Dude Perfect</ChannelName>
              </SidebarList>
          </SidebarSection>
          <SidebarSection>
              <SidebarList>
                  <SettingsIcon />
                  <span>Settings</span>
              </SidebarList>
              <SidebarList>
                  <HelpIcon />
                  <span>Help</span>
              </SidebarList>
              <SidebarList>
                  <ReportingHistoryIcon />
                  <span>Send Feedback</span>
              </SidebarList>
          </SidebarSection>
      </Container>
  );
}

export default Sidebar;