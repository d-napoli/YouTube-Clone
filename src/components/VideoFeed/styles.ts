import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 56px;
    padding: 20px;
    margin-left: 240px;
    width: 100%;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        margin-left: 75px;
    }
`;

export const VideoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 0 auto;
    /* margin-top: 20px; */
    margin-bottom: 20px;
    width: 95%;
`;

export const Divider = styled.div`
    display: flex;
    flex-direction: column;
    height: 2px;
    border: 2px solid var(--primary-light);
    margin: 30px auto;
    width: 95%;
`;