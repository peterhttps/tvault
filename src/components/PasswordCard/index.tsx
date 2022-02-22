import React, { useCallback, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CryptoJS from "react-native-crypto-js";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { OptionsButton, PasswordCardEyeButton, PasswordCardPass, PasswordCardPassArea, PasswordCardTitleContainer, PasswordCartTitle, Wrapper } from './styles';
import { removeAccount } from '../../store/accounts/actions';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  service: string;
  password: string;
  user: string;
  id?: string;
}

const PasswordCard: React.FC<IProps> = ({ id, service, password, user }: IProps) => {
  const navigation = useNavigation();
  const [seeing, setSeeing] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const decryptedPassword = CryptoJS.AES.decrypt(password, 'test').toString(CryptoJS.enc.Utf8);

  const editCard = useCallback(() => {
    setOpenMenu(false);

    navigation.navigate('AddPassword' as never, {
      account: {
        id,
        service,
        password: decryptedPassword,
        user
      }
    } as never);
  }, []);

  const deletCard = useCallback(() => {
    setOpenMenu(false);
    removeAccount(id || '');
  }, []);

  return (
    <Wrapper>
      <PasswordCardTitleContainer>
        <PasswordCartTitle>{service}</PasswordCartTitle>
        <Menu opened={openMenu} onBackdropPress={() => setOpenMenu(false)}>
          <MenuTrigger>
            <OptionsButton activeOpacity={0.3} onPress={() => setOpenMenu(true)}>
              <Ionicons name="ellipsis-vertical" size={16} color="black" />
            </OptionsButton>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={editCard} text='Edit' />
            <MenuOption onSelect={deletCard} text='Delete' />
          </MenuOptions>
        </Menu>
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