import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 
import AddButton from '../../components/AddButton';
import PasswordCard from '../../components/PasswordCard';
import { Container, HomeHeader, HomeTitle, SearchContainer, SearchInput, Wrapper } from './styles';
import { useAccounts } from '../../hooks/useAccounts';
import { useEffect } from 'react';
import { IAccounts } from '../../interfaces/IAccounts';
import { useNavigation } from '@react-navigation/native';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Home() {
  const navigation = useNavigation();
  const authentication = useAuthentication();

  const { accounts } = useAccounts();
  const [accountsFiltered, setAccountsFiltered] = useState<IAccounts[]>();
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication.isAuthenticated) {
      setLoading(false);
    } else {
      navigation.navigate('PasswordLock' as never);
    }
  }, []);

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

  if (loading) return <></>;

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
