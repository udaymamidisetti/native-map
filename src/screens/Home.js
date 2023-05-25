import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Home = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontFamily: 'Roboto',
          fontSize: 20,
          marginTop: 50,
        }}>
        Want to see your Location...
      </Text>
      <Image
        style={{
          height: 280,
          width: Dimensions.get('screen').width,
          marginTop: 40,
        }}
        source={{
          uri: 'https://freepngimg.com/thumb/map/67108-map-gps-location-icon-navigation-software.png',
        }}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => Navigation.navigate('Map')}
          style={{
            height: 35,
            width: 120,
            backgroundColor: '#3db5ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 150,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Show Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
