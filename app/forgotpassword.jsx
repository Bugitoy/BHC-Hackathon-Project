import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen(){
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Image source={require('./Images/ForgotPassword.png')} style={styles.Image}/>
        <Text style={[styles.text, {textAlign: 'center'}]}>Enter the phone number associated with your account.</Text>
        <Text style={[styles.text, {textAlign: 'center'}]}>We sent you a verification code to reset your password.</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor={'#d3d3d3'}
        />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            // Handle login logic here
          }}
        >
            <Link href="/verification" style={styles.nextButtonText}>NEXT</Link>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '300',
    marginBottom: 20,
    fontFamily: 'sans-serif',
    paddingTop: '2%',
  },
  Image:{
    marginBottom:20,
    width: 200,
    height: 200,
  },
  text:{
    marginTop: 20,
    width: 200,
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  input:{
    marginTop: 40,
    width: '70%',
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3', 
  },
  nextButton:{
    width: '70%',
    height: 40,
    marginTop: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  nextButtonText:{
    color: '#fff',
    fontWeight: 'bold',
  }
});


