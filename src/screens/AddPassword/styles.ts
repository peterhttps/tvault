import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
  padding: 16px 16px;  
`;

export const AddHeaderContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBackButton = styled.TouchableOpacity`
  width: 32px;
`;

export const AddHeaderText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-left: 8px;
`;

export const FormInput = styled.TextInput`
  background: #F8F7FB;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 16px;
  margin-top: 16px;
`;

export const PasswordInputContainer = styled.View`
  background: #F8F7FB;
  border-radius: 5px;
  margin-top: 16px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PasswordInput = styled.TextInput`
  font-size: 16px;
  width: 85%;
`;

export const SaveButton = styled.TouchableHighlight`
  background: #334148;
  width: 100%;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 10px;
`;

export const SaveButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;