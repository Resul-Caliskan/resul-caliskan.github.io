import { Buffer } from 'buffer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

if (typeof window !== 'undefined') {
  (window as any).Buffer = (window as any).Buffer || Buffer;
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
