
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from './src/components/Header/Header';
import Posts from './src/components/Posts/Posts';

const App = () => {

  return (
    <SafeAreaView>
      <Header />
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 0.4,
        }}
      />
      <Posts />
    </SafeAreaView>
  );
};


export default App;
