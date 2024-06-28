import {Stack} from 'expo-router';

const _RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="forgotpassword" options={{ headerShown: false }}/>
      <Stack.Screen name="verification" options={{ headerShown: false }} />
      <Stack.Screen name="setpassword" options={{ headerShown: false }} />
      <Stack.Screen name="passwordsaved" options={{ headerShown: false }} />
    </Stack>
  )
} 

export default _RootLayout
