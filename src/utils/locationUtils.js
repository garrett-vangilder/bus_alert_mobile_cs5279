import React from 'react';
import axios from 'axios';
import Config from 'react-native-config';
import {
  Alert,
  Platform,
  PermissionsAndroid,
  Linking,
  ToastAndroid,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

export const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      'Turn on Location Services to allow BusAlert to determine your location.',
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }

  return false;
};

export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }

  return false;
};

export const getLocation = async setLocation => {
  const hasPermission = await hasLocationPermission();

  if (!hasPermission) {
    return;
  }

  Geolocation.getCurrentPosition(
    position => {
      setLocation(position);
      console.log(position);
    },
    error => {
      Alert.alert(`Code ${error.code}`, error.message);
      setLocation(null);
      console.log(error);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      distanceFilter: 0,
      forceRequestLocation: true,
      forceLocationManager: false,
      showLocationDialog: true,
    },
  );
};

function createAxiosInstance() {
  return axios.create({
    baseURL: Config.URL,
  });
}

const api = createAxiosInstance();

export const setLocation = async ({
  routeId,
  latitude,
  longitude,
  isFirstPing,
}) => {
  return api.post('gps', {
    routeId,
    latitude,
    longitude,
    isFirstPing,
  });
};
