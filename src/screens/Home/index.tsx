import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 
import AddButton from '../../components/AddButton';
import PasswordCard from '../../components/PasswordCard';
import { Container, HomeHeader, HomeTitle, SearchContainer, SearchInput, Wrapper } from './styles';
import { useAccounts } from '../../hooks/useAccounts';

export default function Home() {
  const { accounts } = useAccounts();

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

        {accounts.map(item => {
          return (
            <PasswordCard key={item.id} service={item.service} user={item.user} password={item.password} />
          )
        })}
      </Container>
 
      <AddButton/>
      <StatusBar style="auto" />
    </Wrapper>
  );
}
