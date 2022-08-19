
import React from 'react';
import {SafeAreaView} from 'react-native';
import  Header  from './src/components/Header/Header';
import Posts from './src/components/Posts/Posts';

const App = () => {
  
  return (
    <SafeAreaView>
      <Header/>
      <Posts/>
    </SafeAreaView>
  );
};


export default App;
