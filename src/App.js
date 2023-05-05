import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';

function App() {
  return (
    // <SafeAreaView>
    <MainTabNavigator />
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
