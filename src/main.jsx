import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router basename="/mutawaliPorto"> {/* Set basename here */}
      <App />
    </Router>
  </StrictMode>
);
