import React, { useState } from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity, Image } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import { windowHeight } from "../utils/Dimensions";
import { windowWidth } from "../utils/Dimensions";



const LoginScreen = ({navigation})=>{
    const[email,setEmail]= useState();
    const[password,setPassword]= useState();
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/agri_logo.png')}
                style={styles.logo}
            />
            <Text style={styles.head}>Agro Fresh</Text>

            <FormInput
            
                labelValue={email}
                onChangeText={(userEmail)=> setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userpassword)=> setPassword(userpassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                  
                  buttonTitle="Sign In"
                onPress={() => alert(password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => console.log("Jai Ganesh")}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() =>{}}
          />

        <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>
            Don't have an acount? <Text style={{color:'#D61C4E'}}>Create here</Text>
            </Text>
        </TouchableOpacity>
        </View>
    );
};


export default LoginScreen;

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor:'#EEEEEC'
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        marginBottom:-30,
      },
      text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      head:{
          fontSize:32,
          fontStyle:'italic',
          fontWeight:'900',
          marginBottom:90,
          color:'#224B0C'
      },

      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
      },
});