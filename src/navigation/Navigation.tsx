import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import AddPasswordScreen from '../screens/AddPassword';
import PasswordLockScreen from '../screens/PasswordLock';
import PasswordLockSaveScreen from '../screens/PasswordLockSave';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordLock" component={PasswordLockScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordLockSave" component={PasswordLockSaveScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddPassword" component={AddPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;