import React, { useState, useEffect } from 'react';
import { PassDescription, PassTitle, Wrapper } from './styles';
import { Text, StyleSheet, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setAuthentication, setPasslockStorage } from '../../store/authentication/actions';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { SaveButton, SaveButtonText } from '../AddPassword/styles';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#AEAEAE',
    textAlign: 'center',
    borderRadius: 10,
  },
  focusCell: {
    borderColor: '#334148',
  },
});

const CELL_COUNT = 6;

const PasswordLockSave: React.FC = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const saveButton = () => {
    setAuthentication(true);
    setPasslockStorage(value);
    navigation.reset({index: 0, routes: [{name: 'Home' as never}]});
  }

  return (
    <Wrapper>
      <PassTitle>Create a passcode</PassTitle>
      <PassDescription>To access your saved accounts, {"\n"}please create your passcode</PassDescription>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <SaveButton underlayColor="#4C656E" activeOpacity={0.9} onPress={saveButton}>
        <SaveButtonText>
          Save Passcode
        </SaveButtonText>
      </SaveButton>
    </Wrapper>
  );
}

export default PasswordLockSave;