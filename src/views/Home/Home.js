import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {Button, TextInput} from '../../components';

const Separator = () => <View style={styles.separator} />;

const Home = props => {
  const [firstName, setFirstName] = useState('');
  const [uneditableText, setUneditableText] = useState('UNEDITABLE');

  useEffect(() => {
    if (firstName) console.log('First name changed', firstName);
  }, [firstName]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Components</Text>
      <Text>Buttons</Text>
      <Button
        text={'Submit'}
        onPress={() => console.log('PRESSED')}
        disabled={false}
        style={'primary'}
      />
      <Button
        text={'Submit'}
        onPress={() => console.log('PRESSED')}
        disabled={false}
        style={'secondary'}
      />

      <Button
        text={'Submit'}
        onPress={() => console.log('PRESSED')}
        disabled={false}
        style={'text'}
      />
      <Separator />

      <Text>Inputs</Text>
      <TextInput
        label={'first name'}
        onChange={v => setFirstName(v)}
        value={firstName}
        defaultValue={firstName}
        editable={true}
      />
      <TextInput
        onChange={v => setUneditableText(v)}
        value={uneditableText}
        defaultValue={uneditableText}
        editable={false}
      />
    </View>
  );
};

export default Home;
