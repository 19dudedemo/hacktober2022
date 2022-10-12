import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { windowHeight } from '../utils/Dimensions';

export default function FormButton({buttonTitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:"#2B7A0B",
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
    },
    buttonText:{
        fontSize:23,
        fontWeight:'bold',
        color:'#ffffff',
    }
});