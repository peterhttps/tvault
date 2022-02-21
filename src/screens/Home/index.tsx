import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 
import AddButton from '../../components/AddButton';
import PasswordCard from '../../components/PasswordCard';
import { Container, HomeHeader, HomeTitle, SearchContainer, SearchInput, Wrapper } from './styles';

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
        <HomeHeader>
          <HomeTitle>TVault</HomeTitle>
          <SearchContainer>
            <SearchInput placeholder='Search' />
            <Ionicons name="search" size={20} color="#ACABAE" />
          </SearchContainer>
        </HomeHeader>

        {passwords.map(item => {
          return (
            <PasswordCard key={item.name} name={item.name} password={item.password} />
          )
        })}
      </Container>
 
      <AddButton/>
      <StatusBar style="auto" />
    </Wrapper>
  );
}
