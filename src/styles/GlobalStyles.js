import '@fontsource/sirin-stencil';
import '@fontsource/kaushan-script';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
// Professional gradient backgrounds and smooth scrolling
html {
    scroll-behavior: smooth;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
    min-height: 100%;
}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Sirin Stencil", serif;
    overflow-x: hidden;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ff8a80 100%);
    min-height: 100vh;
    color: #333;
    line-height: 1.6;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

// Enhanced typography hierarchy
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    font-weight: 400;
    letter-spacing: 0.5px;
}

h1 { font-size: 3.5rem; line-height: 1.2; }
h2 { font-size: 2.8rem; line-height: 1.3; }
h3 { font-size: 2.2rem; line-height: 1.4; }
h4 { font-size: 1.8rem; line-height: 1.4; }
h5 { font-size: 1.4rem; line-height: 1.5; }
h6 { font-size: 1.2rem; line-height: 1.5; }

a{
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
}

// Professional glass morphism effect
.glass-effect {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    box-shadow: 
        0 8px 32px 0 rgba(31, 38, 135, 0.37),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

// Enhanced glass morphism variants
.glass-light {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-medium {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.25);
}

.glass-heavy {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

// Enhanced button styles
button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        transform: translateY(-2px);
    }
    
    &:active {
        transform: translateY(0);
    }
}

// Professional card shadows
.card-shadow {
    box-shadow: 
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 10px 20px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.1);
}

// Smooth animations
* {
    transition: all 0.3s ease;
}

// Custom scrollbar
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #ff6b9d, #c44569);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #ff8fab, #d55579);
}

// Text selection
::selection {
    background: rgba(255, 107, 157, 0.3);
    color: #333;
}

// Professional focus states
input:focus, textarea:focus, button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.3);
}

// Responsive typography
@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    h4 { font-size: 1.5rem; }
    h5 { font-size: 1.25rem; }
    h6 { font-size: 1.1rem; }
}

@media (max-width: 480px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.25rem; }
}

// Loading animation
@keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
}

.loading-shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite;
}

// Professional floating elements
@keyframes gentle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.floating-element {
    animation: gentle-float 3s ease-in-out infinite;
}
`;

export default GlobalStyles;
