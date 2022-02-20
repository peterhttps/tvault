import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AddButton from '../components/AddButton';
import PasswordCard from '../components/PasswordCard';
import { Container, Wrapper } from './styles';

export default function Home() {

  return (
    <Wrapper>  
      <Container>
        <PasswordCard />
        <PasswordCard />
        <PasswordCard />
      </Container>
 

      <AddButton />
      <StatusBar style="auto" />
    </Wrapper>
  );
}
