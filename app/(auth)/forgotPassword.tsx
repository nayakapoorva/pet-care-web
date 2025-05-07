import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import PetSignIn from '../../assets/images/petSignIn.svg';
import { Link, router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [disableOtp, setDisableOtp] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const handleLogin = () => {
    const isSuccess = true;

    if (isSuccess) {
      router.replace('/signin');
    }
    console.log('hi', email, password);
  };

  const handleEmail = () => {
    if (disableOtp) return;

    console.log('email', email);
    setDisableOtp(true);

    setTimeout(() => {
      setDisableOtp(false);
    }, 15000);
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
          {/* Email Form */}
          <View
            style={{
              backgroundColor: '#E9D9D0',
              padding: 20,
              marginBottom: 16,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: '#E9D9D0',
              width: 300,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 4 }}>Email</Text>
            <TextInput
              placeholder="Enter your Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              style={inputStyle}
            />

            <TouchableOpacity
              onPress={handleEmail}
              disabled={disableOtp}
              style={{
                backgroundColor: disableOtp ? '#A87557' : '#7B3F00',
                paddingVertical: 12,
                borderRadius: 8,
                alignItems: 'center',
                opacity: disableOtp ? 0.6 : 1,
              }}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>
                Send OTP
              </Text>
            </TouchableOpacity>
          </View>

          {/* OTP & Password Form */}
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
            <Text style={{ fontSize: 16, marginBottom: 4 }}>OTP</Text>
            <TextInput
              placeholder="Enter OTP"
              placeholderTextColor="#888"
              value={otp}
              onChangeText={setOtp}
              style={inputStyle}
              autoCapitalize="none"
              keyboardType="email-address"
            />

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

            <Text style={{ fontSize: 16, marginBottom: 4 }}>Confirm Password</Text>
            <TextInput
              placeholder="Re-Enter the password"
              placeholderTextColor="#888"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              style={inputStyle}
            />

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
              <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
            </TouchableOpacity>
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
