import React from 'react';
import {StatusBar} from 'react-native';

import {Main} from './scenes/Main';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Main />
    </>
  );
};
