import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CryptoJS from "react-native-crypto-js";
import { PasswordCardEyeButton, PasswordCardPass, PasswordCardPassArea, PasswordCardTitleContainer, PasswordCartTitle, Wrapper } from './styles';

interface IProps {
  service: string;
  password: string;
  user: string;
}

const PasswordCard: React.FC<IProps> = ({ service, password, user }: IProps) => {
  const [seeing, setSeeing] = useState(false);
  const decryptedPassword = CryptoJS.AES.decrypt(password, 'test').toString(CryptoJS.enc.Utf8);

  return (
    <Wrapper>
      <PasswordCardTitleContainer>
        <PasswordCartTitle>{service}</PasswordCartTitle>
        <Ionicons name="ellipsis-vertical" size={16} color="black" />
      </PasswordCardTitleContainer>
      <PasswordCardPass>{user}</PasswordCardPass> 
      <PasswordCardPassArea>
        {seeing 
        ? <PasswordCardPass>{decryptedPassword}</PasswordCardPass> 
        : <PasswordCardPass>{'•'.repeat(decryptedPassword.length)}</PasswordCardPass>}
        
        {!seeing 
        ? <PasswordCardEyeButton activeOpacity={0.3} onPress={() => setSeeing(seeing => !seeing)}><Ionicons name="ios-eye-off-sharp" size={20} color="black"/></PasswordCardEyeButton>
        : <PasswordCardEyeButton activeOpacity={0.3} onPress={() => setSeeing(seeing => !seeing)}><Ionicons name="ios-eye" size={20} color="black"/></PasswordCardEyeButton>}
      </PasswordCardPassArea>
    </Wrapper>
  );
}

export default PasswordCard;