import { useEffect } from 'react';
import Navigation from './navigation/Navigation';
import { getAccountsStorage, setAccounts } from './store/accounts/actions';

export default function App() {
  useEffect(() => {
    const fetchAsyncStorage = async () => {
      const accountsData = await getAccountsStorage();
      setAccounts(accountsData);
    };
    fetchAsyncStorage();
  }, []);

  return (
    <Navigation />
  );
}

