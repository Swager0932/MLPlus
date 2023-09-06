import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import './styles/index.css';
import './styles/nav.css/'
// import "https://fonts.googleapis.com/css?family=Inder"

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>,
);
