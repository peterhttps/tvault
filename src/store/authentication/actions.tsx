import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationStore } from '.';

export const setAuthentication = (authentication: boolean) =>
  AuthenticationStore.update(s => {
    s.isAuthenticated = authentication;
  });

export const setPasswordStorage = (authentication: boolean) =>
  AuthenticationStore.update(s => {
    s.isAuthenticated = authentication;
  });

export const setPasslockStorage = async (passlock: string) => {
    try {
      await AsyncStorage.setItem('@passlock', passlock);
    } catch (e) {
      // Saving error
    }
};

export const getPasslockStorage = async () => {
  try {
    const actualStorage = await AsyncStorage.getItem('@passlock');
    return actualStorage;
  } catch (e) {
    return null;
  }
};