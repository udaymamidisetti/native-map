import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

const Login = () => {
  const height = Dimensions.get('window').height;
  const Navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleTouch = () => {
    Keyboard.dismiss();
  };

  const handleLogin = async () => {
    try {
      if (email === '' || password === '') {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Please enter email and password',
          visibilityTime: 3000,
        });
      } else {
        await auth().signInWithEmailAndPassword(email, password);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Login Success',
          visibilityTime: 3000,
        });
        Navigation.dispatch(StackActions.replace('Home'));
      }
    } catch (error) {
      console.log(error);
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
      <ScrollView style={{height: height, backgroundColor: '#ebf9fa'}}>
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
            Login
          </Text>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={{
                borderBottomWidth: 1,
                width: '90%',
                marginTop: 20,
                padding: 10,
              }}
              placeholder="Enter Email"
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              style={{
                borderBottomWidth: 1,
                width: '90%',
                marginTop: 20,
                padding: 10,
              }}
              placeholder="Enter Password"
            />

            <TouchableOpacity
              onPress={handleLogin}
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
              <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({});
