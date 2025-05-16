import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

const Profile = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('1234567890');
  const [gender, setGender] = useState('Male');
  const [place, setPlace] = useState('Bangalore');
  const [editProfile, setEditProfile] = useState(false);

  const handleButtonPress = () => {
    if (editProfile) {
      console.log('Profile Updated:', { name, email, phone, gender, place, profilePic });
      Alert.alert('Saved', 'Your profile has been updated');
    }
    setEditProfile(!editProfile);
  };

  const handleChoosePhoto = async () => {
    if (!editProfile) return;

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please grant photo library access to upload a picture.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfilePic(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
          <View style={styles.container}>
            <TouchableOpacity onPress={handleChoosePhoto} disabled={!editProfile}>
              {profilePic ? (
                <Image source={{ uri: profilePic }} style={styles.profileImage} />
              ) : (
                <View style={[styles.profileImage, styles.placeholder]}>
                  <Text style={{ color: '#666' }}>Upload Photo</Text>
                </View>
              )}
            </TouchableOpacity>

            <Text style={labelStyle}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={inputStyle}
              editable={editProfile}
            />

            <Text style={labelStyle}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={inputStyle}
              keyboardType="email-address"
              editable={editProfile}
            />

            <Text style={labelStyle}>Phone Number</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              style={inputStyle}
              keyboardType="phone-pad"
              editable={editProfile}
            />

            <Text style={labelStyle}>Gender</Text>
            <TextInput
              value={gender}
              onChangeText={setGender}
              style={inputStyle}
              editable={editProfile}
            />

            <Text style={labelStyle}>Place</Text>
            <TextInput
              value={place}
              onChangeText={setPlace}
              style={inputStyle}
              editable={editProfile}
            />

            <TouchableOpacity onPress={handleButtonPress} style={buttonStyle}>
              <Text style={{ color: 'white', fontSize: 16 }}>
                {editProfile ? 'Update' : 'Edit'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '90%',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  placeholder: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const labelStyle = {
  fontSize: 14,
  fontWeight: '600' as const,
  marginTop: 12,
};

const inputStyle = {
  height: 44,
  borderWidth: 1,
  borderColor: '#999',
  borderRadius: 8,
  paddingHorizontal: 12,
  marginTop: 4,
  backgroundColor: '#fff',
};

const buttonStyle: ViewStyle = {
  backgroundColor: '#7B3F00',
  marginTop: 24,
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
};

export default Profile;
