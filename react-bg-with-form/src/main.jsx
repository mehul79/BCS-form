
import './index.css';
// import './quillform-overrides.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App'; 
import 'global';
import "@quillforms/renderer-core/build-style/style.css";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);