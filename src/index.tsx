import Navigation from './navigation/Navigation';
import RealmContext from './database/index';

const {RealmProvider} = RealmContext

export default function App() {
  return (
    <RealmProvider>
      <Navigation />
    </RealmProvider>
  );
}

