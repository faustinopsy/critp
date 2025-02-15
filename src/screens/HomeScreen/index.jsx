import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao MeuApp!</Text>
      <Button title="Clique Aqui" onPress={() => alert('Botão pressionado!')} />
    </View>
  );
};

export default HomeScreen;
