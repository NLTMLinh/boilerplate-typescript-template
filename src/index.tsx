import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'globalStyle';
import configureStore from 'store/store';
import LanguageProvider from 'containers/LanguageProvider';
import { NotificationContainer } from 'containers/Notification';
import { defaultTheme } from 'styles/defaultTheme.styles';
import { translationMessages } from './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingContainer from 'containers/LoadingContainer';
import AppContainer from 'containers/AppContainer';

const store = configureStore;

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const render = (messages: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <LanguageProvider messages={messages}>
            <ThemeProvider theme={defaultTheme}>
              <NotificationContainer />
              <GlobalStyle />
              <AppContainer>
                <LoadingContainer>
                  <App />
                </LoadingContainer>
              </AppContainer>
            </ThemeProvider>
          </LanguageProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', './App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

render(translationMessages);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
