import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';

import {ShortCodeContext} from '../../context';
import {Button, TextInput} from '../../components';

export default ({navigation}) => (
  <SafeAreaView>
    <ShortCodeContext.Consumer>
      {({shortCode, setShortCode}) => (
        <View>
          <Text>Welcome to Bus Alert</Text>
          <View>
            <TextInput
              label={'Route Code'}
              onChange={value => setShortCode(value)}
              value={shortCode}
              defaultValue={shortCode}
              editable={true}
            />
          </View>
          <Button
            disabled={!shortCode}
            onPress={() => navigation.navigate('CurrentRoute')}
            text={'To Current Route'}
          />
        </View>
      )}
    </ShortCodeContext.Consumer>
  </SafeAreaView>
);
