import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import { light } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={light}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
