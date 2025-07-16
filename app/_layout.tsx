import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown:true}}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown:false,
          headerBackVisible: false, 
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{headerShown:false,
          headerBackVisible: false, 
          gestureEnabled: false
        }}
         />
      <Stack.Screen
        name="(track)"
        options={{headerShown:false,
          headerBackVisible: false, 
          gestureEnabled: false
        }} />
      <Stack.Screen
        name="petDetails/[id]"
        options={{headerShown:false}} />
    </Stack>;
}
