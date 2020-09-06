import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: min(70vw, 1200px);
  justify-content: space-between;
`;

export const AdLeft = styled.img`
    width: 40%;
    height: 250px;
    flex-shrink: 0;
`;

export const AdsRight = styled.div`
    width: 59%;
    display: flex;
    flex-direction: column;
`;

export const RectangleAd = styled.img`
    height: 125px;
    margin-bottom: 25px;
`;

export const AdBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const AdInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AdAvatar = styled.img`
    display: flex;
    margin-left: 20px;
    width: 85px;
    height: 85px;
    flex-shrink: 0;
    /* background-color: var(--ad-blue); */
    border-radius: 50%;
    margin-right: 20px;
`;

export const AdTitle = styled.h3`

`;

export const AdTag = styled.div`
    background-color: var(--ad-yellow);
    color: var(--primary);
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 2px;
    width: fit-content;
    padding: 0 3px;
    font-size: 10px;
    margin: 0;
    margin-right: 6px;
`;

export const AdDescription = styled.div`
    color: var(--light-gray);
`;

export const AdCta = styled.button`
    background-color: var(--ad-blue);
    border: none;
    text-transform: uppercase;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: bold;
    font-size: 14px;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 7px 0;
`;