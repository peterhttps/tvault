import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PasswordCard, PasswordCardPass, PasswordCartTitle, Wrapper } from './styles';

export default function Home() {
  const [seeing, setSeeing] = useState(false);
  const [password, setPassword] = useState('123456');

  return (
    <Wrapper>
      <Text>Home Page</Text>
      
      <PasswordCard>
        <PasswordCartTitle>Netflix</PasswordCartTitle>
        <PasswordCardPass>{password}</PasswordCardPass>
      </PasswordCard>
      
      <StatusBar style="auto" />
    </Wrapper>
  );
}
