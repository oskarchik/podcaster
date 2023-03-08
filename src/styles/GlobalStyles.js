import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --accent: #267cbc;
    --text: black;
    --light-text: white;
    --placeholders: #c6c6c6;
    --borders: #dcdcdc;
    --page-background: white;
    --lightgrey: #f6f6f6;


    --font:  'Roboto', sans-serif;

    --thin: 300;
    --regular: 400;
    --bold: 700;

/* /* Box sizing rules
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
	padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
}

/* Set core body defaults */
Set core body defaults body {
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
    font-family: var(--font);
    color: var(--text)
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
	list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
	max-width: 100%;
	display: block;
}
p,span{
    font-size: 16px;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
	margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}
`;
