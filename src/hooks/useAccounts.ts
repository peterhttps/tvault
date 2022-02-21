import { AccountsStore } from '../store/accounts/index';

const useAccounts = () => AccountsStore.useState(s => s);

export { useAccounts };
