// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Internal Dependencies
import App from './App/App';
import appStore from './App/appStore';
import './index.css';
import reportWebVitals from './reportWebVitals';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={appStore}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

renderApp();
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App/App', renderApp);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
