import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    :root {
        --primary: #181818;
        --primary-light: #212121;
        --primary-dark: #121212;
        --hover: #383838;
        --hover-alpha: rgba(255, 255, 255, .2);
        --medium-gray: #313131;
        --light-gray: #6f6f6f;
        --color-white: #fff;
        --list-active: #505050;
        --list-active-hover: #4c4c4c;
        --ad-blue: #6baabb;
        --ad-yellow: #fbc02d;
        --descriptions: #aaaaaa;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Robot', sans-serif;
        background: var(--primary);
        color: var(--color-white);
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;