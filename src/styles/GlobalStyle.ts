import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
* { box-sizing: border-box; }
:root { color-scheme: dark; }
html, body, #root { height: 100%; }
body {
margin: 0;
font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
background: ${({ theme }) => theme.colors.bg};
color: ${({ theme }) => theme.colors.text};
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
`;