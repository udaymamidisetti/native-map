import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
// import openMap from 'react-native-open-maps';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenStack} from 'react-native-screens';
// import MapView from 'react-native-maps';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
const App = () => {
  const Stack = createNativeStackNavigator();
  console.log('Started');
  console.log(messaging);
  useEffect(() => {
    console.log('Renderes');
    PushNotification();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
    return unsubscribe;
  }, []);

  async function PushNotification() {
    let fcmToken = await messaging().getToken();
    console.log(fcmToken);
    if (fcmToken) {
      console.log('Fcmtoken', fcmToken);
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
