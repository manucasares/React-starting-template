import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        overflow-x: hidden;
        min-height: 100vh;
        background-color: #f4f4f4;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
    }
`