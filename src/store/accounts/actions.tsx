import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import CryptoJS from 'react-native-crypto-js';
import { AccountsStore } from '.';
import { IAccounts } from '../../interfaces/IAccounts';


export const setAccountsStorage = async (accounts: IAccounts[]) => {
  try {
    await AsyncStorage.setItem('@accounts', JSON.stringify(accounts));
  } catch (e) {
    // Saving error
  }
};

export const setAccounts = (accounts: IAccounts[]) =>
  AccountsStore.update(s => {
    s.accounts = accounts;
  });

export const updateAccount = (account: IAccounts | null) =>
  AccountsStore.update(s => {
    if (!!account) {
      const foundIndex = s.accounts.findIndex(x => x.id === account.id);
      account.password = CryptoJS.AES.encrypt(account.password, 'test');
      s.accounts[foundIndex] = account;
    };
    setAccountsStorage(s.accounts);
  });

export const addAccount = (account: IAccounts | null) =>
  AccountsStore.update(s => {
    if (!!account) {
      account.id = uuid.v4() + Date.now().toString();
      account.password = CryptoJS.AES.encrypt(account.password, 'test').toString();
      s.accounts.push(account)
    };
    setAccountsStorage(s.accounts);
  });

  export const removeAccount = (id: string) =>
  AccountsStore.update(s => {
    const removedStoryArray = s.accounts.filter(item => item.id !== id);
    s.accounts = removedStoryArray;
    setAccountsStorage(s.accounts);
  });

export const getAccountsStorage = async () => {
  try {
    const actualStorage = await AsyncStorage.getItem('@accounts');
    const stories: IAccounts[] = JSON.parse(actualStorage || '[]');
    return stories;
  } catch (e) {
    return [];
  }
};

export const addAccountStorage = async (value: IAccounts) => {
  try {
    const actualStorage = await AsyncStorage.getItem('@accounts');
    const stories: IAccounts[] = JSON.parse(actualStorage || '[]');
    stories.push(value);
    await AsyncStorage.setItem('@accounts', JSON.stringify(stories));
  } catch (e) {
    // saving error
  }
};

export const removeAccountStorage = async (value: IAccounts) => {
  try {
    const actualStorage = await AsyncStorage.getItem('@accounts');
    const stories: IAccounts[] = JSON.parse(actualStorage || '[]');
    const newStories: IAccounts[] = stories.filter(item => item.id !== value.id);
    await AsyncStorage.setItem('@accounts', JSON.stringify(newStories));
  } catch (e) {
    // remove error
  }
};