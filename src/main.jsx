import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from './context/QuizContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* add 'dark' class to enable dark-only theme */}
   <div className="dark">
      <BrowserRouter>
        <QuizProvider>
          <App />
        </QuizProvider>
      </BrowserRouter>
    </div>
  </StrictMode>,
)
