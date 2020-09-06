import styled from 'styled-components';

export const Container = styled.div`
    margin-right: 16px;
    width: 25px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    > div {
        width: 90%;
        height: 2px;
        background-color: white;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
