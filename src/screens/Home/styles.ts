import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #FFF;
  flex: 1;
  padding-top: 16px;
`;

export const Container = styled.ScrollView``;

export const HomeHeader = styled.View`
  margin: auto;
  margin-top: 32px;
  width: 85%;
  margin-bottom: 8px;
`;

export const HomeTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: #03A69A;
  text-align: center;
  margin-bottom: 16px;
`;

export const SearchContainer = styled.View`
  background: #F8F7FB;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px;
  padding-right: 10px;
`;

export const SearchInput = styled.TextInput`
  font-size: 16px;
  padding: 8px 8px;
  width: 85%;
`;