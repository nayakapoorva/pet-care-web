import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import PawLogo from "../assets/images/pawLogo.svg";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="flex flex-row items-center mb-8">
        <PawLogo style={{ marginRight: 8 }} />
        <Text className="text-2xl text-brown font-bold">Welcome to Paw-Care</Text>
      </View>

      <View className="w-48 space-y-4">
        <Link href="/(auth)" asChild>
          <TouchableOpacity className="bg-brown py-2 rounded-xl items-center mb-4">
            <Text className="text-white text-lg font-semibold">Sign In</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(auth)/signup" asChild>
          <TouchableOpacity className="border border-brown py-2 rounded-xl items-center">
            <Text className="text-brown text-lg font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
