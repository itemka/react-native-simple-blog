import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { loadApplication } from './utils/helper';
import { AppNavigation } from './navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) return (
    <AppLoading
      startAsync={loadApplication}
      onError={err => console.log(err)}
      onFinish={() => setIsReady(true)}
    />
  );

  return <AppNavigation/>; //❗️
}
