import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {ShortCodeContext} from '../../context';

import {Button} from '../../components';

export default ({navigation}) => {
  const [pingCount, setPingCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const intervalId = setInterval(() => {
      setPingCount(pingCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  });

  return (
    <SafeAreaView>
      <ShortCodeContext.Consumer>
        {({shortCode, setShortCode}) => (
          <View>
            <View>
              <Text>Current Route: {shortCode}</Text>
            </View>
            <View>
              <Text>Current Ping Count: {pingCount}</Text>
            </View>
            <View>
              <Button
                onPress={() => {
                  setShortCode('');
                  navigation.goBack();
                }}
                text={'Back'}
              />
            </View>
          </View>
        )}
      </ShortCodeContext.Consumer>
    </SafeAreaView>
  );
};
