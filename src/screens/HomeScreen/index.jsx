import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';

const HomeScreen = () => {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao MeuApp!</Text>
      <Button title="Clique Aqui" onPress={() => alert('Botão pressionado!')} />
        <View style={styles.linha}>
          <Button title="Diminuir" onPress={() => setContador(contador - 1)} />
          <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
        </View>
        <Text style={styles.text}>{contador}</Text>
    </View>
  );
};

export default HomeScreen;
