import styled, { css } from 'styled-components';

import {
  FaSearch,
  FaBell
} from 'react-icons/fa';

import {
  BsGrid3X3GapFill,
  BsCameraVideoFill
} from 'react-icons/bs'

export const Container = styled.div`
  width: 100%;
  background-color: var(--primary-light);
  height: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 33%;
`;

export const CenterSide = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 30px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 33%;
`;

export const FormWrapper = styled.div`
  height: 100%;
  align-items: center;
  display: flex;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const SearchBar = styled.input`
  background-color: var(--primary-dark);
  border: 0.6px solid var(--hover);
  color: var(--color-white);
  padding: 5px 7px;
  font-size: 17px;
  font-weight: 400;
  width: 93%;
  height: 100%;

  ::-webkit-input-placeholder {
      font-weight: lighter;
  }
  ::-moz-placeholder {
      font-weight: lighter;
  }
  ::-ms-input-placeholder {
      font-weight: lighter;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  border: 0.6px solid var(--hover);
  background-color: var(--medium-gray);
  color: var(--light-gray);
  width: 7%;

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

export const SearchIcon = styled(FaSearch)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const Wrapper = styled.div`
  text-align: right;
  width: 100%;
  align-items: center;
`;

const iconCSS = css`
  color: var(--color-white);
  width: 20px;
  height: 20px;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  height: 40px;
  padding: 0;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 25px;
  }

  @media screen and (min-width: 768px) { /** Only get margins when its on desktop */
    margin-right: 8px;
    width: 40px;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--hover-alpha);
    transition: 0.2s ease 0s all;
  }
`;

export const CameraIcon = styled(BsCameraVideoFill)` ${ iconCSS }; `;
export const GridIcon = styled(BsGrid3X3GapFill)` ${ iconCSS }; `;
export const BellIcon = styled(FaBell)` ${ iconCSS }; `;
