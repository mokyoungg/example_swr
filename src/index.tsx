import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyle';
import App from './App';
import ToastContainer from './components/ToastContainer/ToastContainer';
import { triggerErrorToast } from './utils/triggerToast';
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        onError: (error) => {
          const { message } = error;
          triggerErrorToast(message);
        },
      }}
    >
      <GlobalStyle />
      <App />
      <ToastContainer
        position="bottom-left"
        theme="colored"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </SWRConfig>
  </React.StrictMode>,
);
