import React, {useEffect, useState, useContext} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {ShortCodeContext, LocationContext} from '../../context';
import {getLocation} from '../../utils/locationUtils';

import {Button} from '../../components';
import styles from './styles';

export default ({navigation}) => {
  const {setLocation} = useContext(LocationContext);
  const [pingCount, setPingCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const intervalId = setInterval(async () => {
      await getLocation(setLocation);
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
        <ShortCodeContext.Consumer>
          {({shortCode, setShortCode}) => (
            <View style={styles.pageContainer}>
              <View style={styles.routeHelper}>
                <Text testID={'current-route-id'}>
                  Current Route: {shortCode}
                </Text>
                <Text testID={'current-route-pingCount'}>
                  Current Ping Count: {pingCount}
                </Text>
                <LocationContext.Consumer>
                  {({location}) => (
                    <View>
                      {location &&
                      location.coords &&
                      location.coords.latitude ? (
                        <Text testID={'current-route-lat'}>
                          Latitude: {location.coords.latitude}
                        </Text>
                      ) : null}
                      {location &&
                      location.coords &&
                      location.coords.longitude ? (
                        <Text testID={'current-route-long'}>
                          Longitude: {location.coords.longitude}
                        </Text>
                      ) : null}
                    </View>
                  )}
                </LocationContext.Consumer>
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
          )}
        </ShortCodeContext.Consumer>
      </SafeAreaView>
    </View>
  );
};
