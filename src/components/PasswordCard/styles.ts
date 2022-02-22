import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #F8F7FB;
  width: 85%;
  margin: auto;
  padding: 16px 16px;
  border-radius: 10px;
  margin-top: 16px;
`;

export const PasswordCardTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsButton = styled.TouchableOpacity`
  border-radius: 10px;
  padding-left: 16px;
`;

export const PasswordCartTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const PasswordCardPass = styled.Text`
  margin-right: 8px;
`;

export const PasswordCardPassArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PasswordCardEyeButton = styled.TouchableOpacity`
  width: 30px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;