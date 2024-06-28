import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SetPasswordScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./Images/NewCredentials.png')} style={styles.image} />
      <Text style={styles.title}>NEW</Text>
      <Text style={styles.title}>CREDENTIALS</Text>
      <Text style={[styles.text, { textAlign: 'center' }]}>
        Set your new password
      </Text>
      <View style={styles.formContainer} >
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          placeholderTextColor={'#d3d3d3'}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor={'#d3d3d3'}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            // Handle login logic here
          }}
        >
          <Link href="/passwordSaved" style={styles.loginButtonText}>NEXT</Link>
        </TouchableOpacity>
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
    justifyContent: 'center',
  },
  image: {
    marginBottom: 20,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 35,
    fontWeight: '300',
    fontFamily: 'sans-serif',
    paddingTop: '2%',
  },
  text: {
    margin: 30,
    width: 200,
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#f5ca5a',
    borderRadius: 30,
    paddingVertical: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
