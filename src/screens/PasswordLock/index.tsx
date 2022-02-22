import React, { useState } from 'react';
import { ErrorMessage, PassContainer, PassDescription, PassTitle, Wrapper } from './styles';
import { Text, StyleSheet, Vibration } from 'react-native';
// import { Container } from './styles';
import { useEffect } from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

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

const PasswordLock: React.FC = () => {
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {

    if (value === '232323') {
      Vibration.vibrate();
    }

    if (value.length === 6 && value !== '232323') {
      Vibration.vibrate();
      setShowError(true);
      setValue('');
      setShowError(true);
    }
  }, [value]);

  return (
    <Wrapper>
      <PassTitle>Enter your passcode</PassTitle>
      <PassDescription>To access your saved accounts, {"\n"}please enter your passcode</PassDescription>
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
      {showError && <ErrorMessage>Invalid code</ErrorMessage>}
    </Wrapper>
  );
}

export default PasswordLock;