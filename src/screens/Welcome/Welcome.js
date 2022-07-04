import React, {useEffect, useState} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {KeyboardAvoidingView, Text, SafeAreaView, View} from 'react-native';

import {ShortCodeContext} from '../../context';
import {Button, TextInput} from '../../components';
import {styles} from './index';
import {hasLocationPermission} from '../../utils/locationUtils';

export default ({navigation}) => {
  const [hasLocationPermissions, setHasLocationPermissions] = useState(false);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    async function fetchHasLocationPermissions() {
      const hasPerms = await hasLocationPermission();
      setHasLocationPermissions(hasPerms);
    }
    fetchHasLocationPermissions();
  }, [hasLocationPermissions, setHasLocationPermissions]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ShortCodeContext.Consumer>
          {({shortCode, setShortCode}) => (
            <View style={styles.pageContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome to Bus Alert</Text>
              </View>
              <View style={styles.flexOne}>
                <TextInput
                  testID={'short-code-text-input'}
                  label={'Route Code'}
                  onChange={value => setShortCode(value)}
                  value={shortCode}
                  defaultValue={shortCode}
                  editable={true}
                />
              </View>
              <KeyboardAvoidingView
                keyboardVerticalOffset={headerHeight + 66}
                behavior={'padding'}
                style={styles.flexOne}>
                <Button
                  testID={'welcome-to-current-route-button'}
                  disabled={!shortCode || !hasLocationPermissions}
                  onPress={() => navigation.navigate('CurrentRoute')}
                  text={'Start Driving'}
                />
              </KeyboardAvoidingView>
            </View>
          )}
        </ShortCodeContext.Consumer>
      </SafeAreaView>
    </View>
  );
};
