import { Text, View } from "react-native";
import PawLogo from "../assets/images/pawLogo.svg";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 flex-col justify-center items-center">
      <View className="flex flex-row items-center">
        <PawLogo style={{marginRight: "1rem"}}/>
        <Text className="text-2xl text-brown font-bold ml-[1rem]">Welcome to Paw-Care</Text>
      </View>
      <Link href='/(auth)'>Sign In</Link>
      <Link href='/(auth)/signup'>Sign Up</Link>
    </View>
  );
}
