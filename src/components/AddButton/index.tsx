import React, { useCallback } from 'react';
import { Wrapper } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import Navigation from '../../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';

const AddButton: React.FC = () => {
  const navigation = useNavigation();

  const goToAddPassword = useCallback(() => {
    navigation.navigate('AddPassword' as never);
  }, []);

  return (
    <Wrapper underlayColor="#4C656E" activeOpacity={0.9} onPress={goToAddPassword}>
      <Ionicons name="add" size={24} color="white" />
    </Wrapper>
  );
}

export default AddButton;