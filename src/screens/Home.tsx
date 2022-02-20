import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import PasswordCard from '../components/PasswordCard';
import { Wrapper } from './styles';

export default function Home() {

  return (
    <Wrapper>  
      <PasswordCard />
      
      <StatusBar style="auto" />
    </Wrapper>
  );
}
