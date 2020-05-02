import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { loadApplication } from './utils/helper';
import { AppNavigation } from './navigation/AppNavigation'; //❗
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) return (
    <AppLoading
      startAsync={loadApplication}
      onError={err => console.log(err)}
      onFinish={() => setIsReady(true)}
    />
  );

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
};
