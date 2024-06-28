import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerificationScreen() {
  const [code, setCode] = useState(['', '', '', '']); // State to hold 4 input values

  // Function to update input values
  const handleCodeChange = (text, index) => {
    if (text.length <= 1) {
      let newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Image source={require('./Images/Verification.png')} style={styles.image} />
      <Text style={[styles.text, { textAlign: 'center' }]}>
        Enter the verification code we just sent to your phone number
      </Text>
      <View style={styles.inputContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={value}
            onChangeText={(text) => handleCodeChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            placeholder="X"
            placeholderTextColor="#d3d3d3"
          />
        ))}
      </View>
      <Text style={[styles.text, { textAlign: 'center' }]}>If you didn't receive a code</Text>
      <Text style={[styles.Resendtext, { textAlign: 'center' }]}>
        Resend
      </Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          // Handle verification logic here
          const enteredCode = code.join(''); // Combine all 4 digits into a single string
          console.log('Entered verification code:', enteredCode);
        }}
      >
        <Link href="/setpassword" style={styles.nextButtonText}>NEXT</Link>
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
  image: {
    marginBottom: 20,
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    width: 200,
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    width: '70%',
  },
  input: {
    width: '20%',
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    textAlign: 'center',
    fontSize: 20,
  },
  nextButton: {
    width: '70%',
    height: 40,
    marginTop: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Resendtext:{
    color: '#ffa004',
  }
});
