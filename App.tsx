import {View, Text} from 'react-native';
import React from 'react';
import MainContainer from './src/screens/MainContainer';
import {Provider} from 'react-redux';
import {mystore} from './src/newredux/MyStore';

const App = () => {
  return (
    <Provider store={mystore}>
      <MainContainer />
    </Provider>
  );
};

export default App;
