import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const height = Dimensions.get('window').height;
  const Navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleTouch = () => {
    Keyboard.dismiss();
  };
  const handleRegister = async () => {
    try {
      if (email === '' || password === '') {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Please Enter Email and Password',
          visibilityTime: 2000,
        });
      } else {
        await auth().createUserWithEmailAndPassword(email, password);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'User Register Sucessfull',
          visibilityTime: 2000,
        });

        Navigation.dispatch(StackActions.replace('Login'));
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
        visibilityTime: 2000,
      });
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View>
        <View style={{height: height, backgroundColor: '#ebf9fa'}}>
          <Toast />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                marginTop: 190,
                color: 'black',
              }}>
              SignUp
            </Text>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  width: '90%',
                  marginTop: 20,
                  padding: 10,
                }}
                placeholder="Enter Username"
                onChangeText={setEmail}
              />
              <TextInput
                secureTextEntry
                style={{
                  borderBottomWidth: 1,
                  width: '90%',
                  marginTop: 20,
                  padding: 10,
                }}
                placeholder="Enter Password"
                onChangeText={setPassword}
              />

              <TouchableOpacity
                onPress={handleRegister}
                style={{
                  backgroundColor: '#57beff',
                  height: 35,
                  width: 100,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 25,
                }}>
                <Text style={{color: 'white'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',

              marginTop: 15,
              fontWeight: '500',
            }}>
            Already Have an Account??
            <Text
              style={{fontWeight: '800'}}
              onPress={() => Navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
