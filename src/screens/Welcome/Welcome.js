import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {KeyboardAvoidingView, Text, SafeAreaView, View} from 'react-native';

import {ShortCodeContext} from '../../context';
import {Button, TextInput} from '../../components';
import {styles} from './index';

export default ({navigation}) => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ShortCodeContext.Consumer>
          {({shortCode, setShortCode}) => (
            <View style={styles.pageContainer}>
              <Text>Short code: {shortCode}</Text>
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
                  disabled={!shortCode}
                  onPress={() => navigation.navigate('CurrentRoute')}
                  text={'To Current Route'}
                />
              </KeyboardAvoidingView>
            </View>
          )}
        </ShortCodeContext.Consumer>
      </SafeAreaView>
    </View>
  );
};
