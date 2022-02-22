import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
  padding: 32px 16px;  
`;

export const PassTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const PassDescription = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #AEAEAE;
`;

export const PassContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: red;
  margin-top: 16px;
`;
