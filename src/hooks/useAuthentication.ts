import { AuthenticationStore } from '../store/authentication';

const useAuthentication = () => AuthenticationStore.useState(s => s);

export { useAuthentication };
