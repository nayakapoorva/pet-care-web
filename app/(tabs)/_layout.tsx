import { Tabs } from 'expo-router'
import React from 'react'

const _Layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        {/* <Tabs.Screen name="index" 
            options={{
                title: "Home",
                headerShown: false
            }} /> */}
        <Tabs.Screen name="pets" 
            options={{
                title: "Pets",
                headerShown: true
        }} />
        <Tabs.Screen name="profile" 
            options={{
                title: "Profile",
                headerShown: true
        }} />
    </Tabs>
  )
}

export default _Layout