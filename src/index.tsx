import { useEffect } from 'react';
import Navigation from './navigation/Navigation';
import { getAccountsStorage, setAccounts } from './store/accounts/actions';
import { MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  useEffect(() => {
    const fetchAsyncStorage = async () => {
      const accountsData = await getAccountsStorage();
      setAccounts(accountsData);
    };
    fetchAsyncStorage();
  }, []);

  return (
    <MenuProvider>
      <Navigation />
    </MenuProvider>
  );
}

