import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContextAPI from './utils/ContextAPI';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './Localization/i18next';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ContextAPI>
                <BrowserRouter>
                    <GoogleOAuthProvider clientId="800279046459-7e4h0lc55eu65dgd5jir1q64ephfkqgk.apps.googleusercontent.com">
                        <App />
                    </GoogleOAuthProvider>
                </BrowserRouter>
            </ContextAPI>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
