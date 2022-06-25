import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';

import {ShortCodeContext} from '../../context';
import {Button, TextInput} from '../../components';
import {styles} from './index';

export default ({navigation}) => (
  <View style={styles.container}>
    <SafeAreaView>
      <ShortCodeContext.Consumer>
        {({shortCode, setShortCode}) => (
          <View style={styles.pageContainer}>
            <View style={styles.flexOne}>
              <Text>Welcome to Bus Alert</Text>
            </View>
            <View style={styles.flexOne}>
              <TextInput
                label={'Route Code'}
                onChange={value => setShortCode(value)}
                value={shortCode}
                defaultValue={shortCode}
                editable={true}
              />
            </View>
            <View style={styles.flexOne}>
              <Button
                disabled={!shortCode}
                onPress={() => navigation.navigate('CurrentRoute')}
                text={'To Current Route'}
              />
            </View>
          </View>
        )}
      </ShortCodeContext.Consumer>
    </SafeAreaView>
  </View>
);
