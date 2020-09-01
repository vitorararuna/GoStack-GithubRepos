import { createGlobalStyle } from 'styled-components';

import git from '../assets/git.svg';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body{
        background: #fafaf5 url(${git}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased; /* Deixa a fonte melhor exposta */
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

`;