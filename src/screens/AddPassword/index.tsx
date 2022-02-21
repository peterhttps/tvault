import React, { useCallback, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AddHeaderContainer, AddHeaderText, FormInput, HeaderBackButton, PasswordInput, PasswordInputContainer, SaveButton, SaveButtonText, Wrapper } from './styles';
import { PasswordCardEyeButton } from '../../components/PasswordCard/styles';
import { addAccount } from '../../store/accounts/actions';

const AddPassword: React.FC = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState('');
  const [service, setService] = useState('');
  const [password, setPassword] = useState('');

  const backToHome = useCallback(() => {
    navigation.goBack();
  }, []);

  const saveButton = () => {
    addAccount({
      user,
      service,
      password
    })

    navigation.goBack();
  };

  return (
    <Wrapper>
      <AddHeaderContainer>
        <HeaderBackButton>
          <Ionicons name="arrow-back" size={24} color="black" onPress={backToHome} />
        </HeaderBackButton>
        <AddHeaderText>
          Add new account
        </AddHeaderText>
      </AddHeaderContainer>

      <FormInput placeholder='Service' onChangeText={newText => setService(newText)}/>

      <FormInput placeholder='Email / User'onChangeText={newText => setUser(newText)} />

      <PasswordInputContainer>
        <PasswordInput placeholder='Password' secureTextEntry={!showPassword} onChangeText={newText => setPassword(newText)} />
        {!showPassword 
        ? <PasswordCardEyeButton activeOpacity={0.3} onPress={() => setShowPassword(showPassword => !showPassword)}><Ionicons name="ios-eye-off-sharp" size={20} color="black"/></PasswordCardEyeButton>
        : <PasswordCardEyeButton activeOpacity={0.3} onPress={() => setShowPassword(showPassword => !showPassword)}><Ionicons name="ios-eye" size={20} color="black"/></PasswordCardEyeButton>}
      </PasswordInputContainer>

      <SaveButton underlayColor="#4C656E" activeOpacity={0.9} onPress={saveButton}>
        <SaveButtonText>
          Save Account
        </SaveButtonText>
      </SaveButton>

    </Wrapper>
  );
}

export default AddPassword;