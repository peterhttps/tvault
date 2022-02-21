import { Store } from 'pullstate';
import { IAccounts } from '../../interfaces/IAccounts';

export const AccountsStore = new Store<{ accounts: IAccounts[] }>({
  accounts: []
});
