import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'nprogress/nprogress.css';
import { enableES5 } from "immer";
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'src/serviceWorker';
import { Provider } from 'react-redux';
import './index.css';
import { SettingsProvider } from 'src/context/SettingsContext';
import { configureStore } from "src/redux/store";
import { restoreSettings } from "src/utils/settingsLocalStorage";
import App from './App';
// import reportWebVitals from './reportWebVitals';

enableES5();

const store = configureStore();
const settings = restoreSettings();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();
