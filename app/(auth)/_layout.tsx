import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="index"
        options={{
          title: "Sign in",
          headerShown:true,
          headerBackVisible: false, 
          gestureEnabled: false
        }}
      />
       <Stack.Screen
        name="signup"
        options={{
          title: "Sign Up",
          headerShown:true,
          headerBackVisible: false, 
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        options={{
          title: "Forgot Password",
          headerShown:true,
          headerBackVisible: false, 
          gestureEnabled: false
        }}
      />
    </Stack>
  )
}

export default AuthLayout