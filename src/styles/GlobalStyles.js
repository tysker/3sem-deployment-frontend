import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        
        --color-purple-50: #faf5ff;
        --color-purple-100: #f3e8ff;
        --color-purple-200: #e9d5ff;
        --color-purple-300: #d8b4fe;
        --color-purple-400: #c084fc;
        --color-purple-500: #a855f7;
        --color-purple-600: #9333ea;
        --color-purple-700: #7e22ce;
        --color-purple-800: #6b21a8;
        --color-purple-900: #581c87;
        --color-purple-950: #4a044e;

        /* Grey */
        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;

        --color-primary: #007bff;
        --color-secondary: #6c757d;
        --color-success: #28a745;
        --color-info: #17a2b8;
        --color-warning: #ffc107;
        --color-danger: #dc3545;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%; /* Set the base font size to 10px */
    }

    body {
        font-family: 'Merriweather', serif;
        color: var(--color-grey-700);

        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;
    }
`;

export default GlobalStyles;