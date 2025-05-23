import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PetSignIn from '../../assets/images/petSignIn.svg';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)/profile');
    console.log('hi', email, password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#7B3F00',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 30,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={{  marginBottom: 10 }}>
            <PetSignIn />
          </View>

          {/* Form */}
          <View
            style={{
              backgroundColor: '#E9D9D0',
              padding: 20,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: '#E9D9D0',
              width: 300,
            }}
          >
            {/* Email Field */}
            <Text style={{ fontSize: 16, marginBottom: 4 }}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={inputStyle}
            />

            {/* Password Field */}
            <Text style={{ fontSize: 16, marginBottom: 4 }}>Password</Text>
            <View style={{ position: 'relative' }}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={inputStyle}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 15,
                }}
              >
                <Text style={{ fontSize: 14, color: '#7B3F00' }}>
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                marginTop: 12,
                backgroundColor: '#7B3F00',
                paddingVertical: 12,
                borderRadius: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>

            {/* Links */}
            <View style={{ alignItems: 'center', marginTop: 16 }}>
              <Link href="/forgotPassword">Forgot Password</Link>
              <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <Text>New User? </Text>
                <Link href="/signup">Sign Up</Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const inputStyle = {
  height: 44,
  borderColor: '#999',
  borderWidth: 1,
  marginBottom: 16,
  paddingHorizontal: 12,
  backgroundColor: '#fff',
  borderRadius: 8,
  fontSize: 16,
};
