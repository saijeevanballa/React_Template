import React, { Suspense } from 'react';
import Router from "./setup/routes-manager"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { persistor, store } from './store';
import Loading from './common/components/loading';
import { DEFAULT_TOASTER } from './common/constants';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Loading />
          <ToastContainer {...DEFAULT_TOASTER} />
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
