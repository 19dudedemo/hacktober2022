import React from "react";
import { View, Text, Button, StyleSheet,Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const Skip=()=>{
    <Button
        title="Skip"
        color="#000000"
     
        />
}

const Next=({...props})=>{
    <Button
        title="Next"
        color="#000000"
        {...props}
        />
}

const Done=({...props})=>{
    <Button
        title="Done"
        color="#000000"
        {...props}
        />
}


const OnboardingScreen = ({navigation})=>{
    return(
        <Onboarding
        // SkipButtonComponent={Skip}
        // NextButtonComponent={Next}
        // DoneButtonComponent={Done}
        onSkip={()=> navigation.replace("Login")}
        onDone={()=> navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/favicon.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: 'pink',
        image: <Image source={require('../assets/favicon.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      }
  ]}
/>
    );
};


export default OnboardingScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
});