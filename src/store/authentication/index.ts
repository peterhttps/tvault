import { Store } from 'pullstate';

export const AuthenticationStore = new Store<{ isAuthenticated: boolean }>({
  isAuthenticated: false
});
