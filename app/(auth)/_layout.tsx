import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="index"
        options={{
          title: "Sign in",
          headerShown:true}}
      />
       <Stack.Screen
        name="signup"
        options={{
          title: "Sign Up",
          headerShown:true}}
      />
      <Stack.Screen
        name="forgotPassword"
        options={{
          title: "Forgot Password",
          headerShown:true}}
      />
    </Stack>
  )
}

export default AuthLayout