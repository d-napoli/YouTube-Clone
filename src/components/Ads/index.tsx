import React from 'react';

import MainAddImage from '../../assets/images/main-add-image.jpg';
import MainAddUp from '../../assets/images/main-add-up.jpg';

import {
    Container,
    AdLeft,
    AdsRight,
    RectangleAd,
    AdBottom,
    AdAvatar,
    AdTitle,
    AdTag,
    AdDescription,
    AdCta,
    AdInfo,
    DescriptionWrapper
} from './styles';

const Ads: React.FC = () => {
  return (
      <Container>
          <AdLeft src={MainAddImage} />
          <AdsRight>
              <RectangleAd src={MainAddUp} />
              <AdBottom>
                  <AdAvatar src={MainAddUp} />
                  <AdInfo>
                    <AdTitle>Privacy. That's Iphone.</AdTitle>
                    <DescriptionWrapper>
                        <AdTag>Advertisement</AdTag>
                        <AdDescription>Apple.com</AdDescription>
                    </DescriptionWrapper>
                    <AdCta>Order Now</AdCta>
                  </AdInfo>
              </AdBottom>
          </AdsRight>
      </Container>
  );
}

export default Ads;