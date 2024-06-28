import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./Images/Homescreen.jpg')} style={styles.heroImage} />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {textAlign: 'center'}]}>Botswana Smart</Text>
        <Text style={[styles.title, {textAlign: 'center'}]}>Housing</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor={'#d3d3d3'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={'#d3d3d3'}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            // Handle login logic here
          }}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <Link href="/forgotpassword" style={styles.link1}>
          <Text>Forgot Password</Text>
        </Link>
        <Link href="/register" style={styles.link2}>
          <Text>Register here</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heroImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  titleContainer:{
    margin: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  formContainer: {
    paddingTop: 10,
    paddingBottom: 17,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#f5ca5a',
    borderRadius: 40,
  },
  input: {
    width: '85%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  loginButton: {
    width: '85%',
    height: 40,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link1: {
    marginTop: 10,
    color: 'white',
  },
  link2:{
    marginTop: 10,
    color: 'orange',
  }
});
