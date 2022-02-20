import React, { useState } from 'react';
import { PasswordCardEyeButton, PasswordCardPass, PasswordCardPassArea, PasswordCardTitleContainer, PasswordCartTitle, Wrapper } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

const PasswordCard: React.FC = () => {

  const [seeing, setSeeing] = useState(false);
  const [password, setPassword] = useState('123456');

  return (
    <Wrapper>
      <PasswordCardTitleContainer>
        <PasswordCartTitle>Netflix</PasswordCartTitle>
        <MaterialCommunityIcons name="pencil" size={18} color="black" />
      </PasswordCardTitleContainer>
      <PasswordCardPassArea>
        {seeing 
        ? <PasswordCardPass>{password}</PasswordCardPass> 
        : <PasswordCardPass>{'•'.repeat(password.length)}</PasswordCardPass>}
        
        {!seeing 
        ? <PasswordCardEyeButton activeOpacity={0.3} onPress={() => setSeeing(seeing => !seeing)}><Ionicons name="ios-eye-off-sharp" size={20} color="black"/></PasswordCardEyeButton>
        : <PasswordCardEyeButton activeOpacity={0.3} onPress={() => setSeeing(seeing => !seeing)}><Ionicons name="ios-eye" size={20} color="black"/></PasswordCardEyeButton>}
      </PasswordCardPassArea>
    </Wrapper>
  );
}

export default PasswordCard;