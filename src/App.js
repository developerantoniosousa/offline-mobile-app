import React from 'react';
import {StatusBar} from 'react-native';
import FlashMessage from "react-native-flash-message";

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
      <FlashMessage position="top" />
    </>
  );
};
