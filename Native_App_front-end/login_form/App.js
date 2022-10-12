
import Providers from './navigation';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import React ,{useEffect}from 'react';
import { StyleSheet } from 'react-native';





export default function App() {
  return(
    <Providers />
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
