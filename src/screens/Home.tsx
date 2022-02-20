import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AddButton from '../components/AddButton';
import PasswordCard from '../components/PasswordCard';
import { Container, Wrapper } from './styles';

export default function Home() {

  const passwords = [
    {
      name: 'Netflix',
      password: 'myP4ssw0rd9'
    },
    {
      name: 'Spotify',
      password: 'Mus1c$$'
    },
    {
      name: 'Facebook',
      password: 'F4c3b00kT00MuchB1gP4ss'
    },
  ]

  return (
    <Wrapper>  
      <Container>
        {passwords.map(item => {
          return (
            <PasswordCard key={item.name} name={item.name} password={item.password} />
          )
        })}
      </Container>
 
      <AddButton />
      <StatusBar style="auto" />
    </Wrapper>
  );
}
