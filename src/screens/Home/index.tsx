import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 
import AddButton from '../../components/AddButton';
import PasswordCard from '../../components/PasswordCard';
import { Container, HomeHeader, HomeTitle, SearchContainer, SearchInput, Wrapper } from './styles';
import { useAccounts } from '../../hooks/useAccounts';
import { useEffect } from 'react';
import { IAccounts } from '../../interfaces/IAccounts';

export default function Home() {
  const { accounts } = useAccounts();
  const [accountsFiltered, setAccountsFiltered] = useState<IAccounts[]>();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (searchInput === '') {
      setAccountsFiltered(accounts);
    } else {
      const accountsFilter = accounts.filter(account => {
        return account.service.toLowerCase().includes(searchInput.toLowerCase()) === true;
      });
  
      setAccountsFiltered(accountsFilter);
    }

  }, [searchInput, accounts]);

  return (
    <Wrapper>  
      <Container>
        <HomeHeader>
          <HomeTitle>TVault</HomeTitle>
          <SearchContainer>
            <SearchInput placeholder='Search' onChangeText={newText => setSearchInput(newText)}/>
            <Ionicons name="search" size={20} color="#ACABAE" />
          </SearchContainer>
        </HomeHeader>

        {accountsFiltered?.map(item => {
          return (
            <PasswordCard key={item.id} id={item.id} service={item.service} user={item.user} password={item.password} />
          )
        })}
      </Container>
 
      <AddButton/>
      <StatusBar style="auto" />
    </Wrapper>
  );
}
