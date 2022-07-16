import React, {useEffect, useState, useContext, useCallback} from 'react';
import {Text, SafeAreaView, View, FlatList} from 'react-native';
import {ShortCodeContext, LocationContext} from '../../context';
import {
  getLocation,
  setLocation as updateLocation,
} from '../../utils/locationUtils';

import {Button} from '../../components';
import styles from './styles';

export default ({navigation}) => {
  const {location, setLocation} = useContext(LocationContext);
  const {shortCode, setShortCode} = useContext(ShortCodeContext);
  const [pingCount, setPingCount] = useState(0);
  const [responseLog, setResponseLog] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const intervalId = setInterval(async () => {
      await getLocation(setLocation);
      let resp;
      try {
        resp = await updateLocation({
          routeId: shortCode,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setResponseLog([...responseLog, JSON.stringify(resp)]);
      } catch (err) {
        setResponseLog([...responseLog, JSON.stringify(err.response.data)]);
      }
      setPingCount(pingCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.pageContainer}>
          <View style={styles.routeData}>
            <Text style={styles.text} testID={'current-route-id'}>
              Current Route: {shortCode}
            </Text>
            <Text style={styles.text} testID={'current-route-pingCount'}>
              Current Ping Count: {pingCount}
            </Text>
            <View>
              {location && location.coords && location.coords.latitude ? (
                <Text style={styles.text} testID={'current-route-lat'}>
                  Latitude: {location.coords.latitude}
                </Text>
              ) : null}
              {location && location.coords && location.coords.longitude ? (
                <Text style={styles.text} testID={'current-route-long'}>
                  Longitude: {location.coords.longitude}
                </Text>
              ) : null}
            </View>
          </View>
          <View style={styles.routeLog}>
            <FlatList
              data={[...responseLog].reverse()}
              renderItem={({item}) => {
                return (
                  <View style={styles.routeItem}>
                    <Text>{JSON.stringify(item)}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <Button
              testID={'driving-stop'}
              onPress={() => {
                setLocation(null);
                setShortCode('');
                navigation.goBack();
              }}
              text={'Stop Driving'}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
