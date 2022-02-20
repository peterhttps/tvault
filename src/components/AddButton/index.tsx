import React from 'react';
import { Wrapper } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

const AddButton: React.FC = () => {
  return (
    <Wrapper underlayColor="#4C656E" activeOpacity={0.9} onPress={() => alert('Pressed!')}>
      <Ionicons name="add" size={24} color="white" />
    </Wrapper>
  );
}

export default AddButton;