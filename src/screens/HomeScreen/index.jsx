import React, { useState, useEffect }  from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const carregaConta = async () => {
      const storedConta = await AsyncStorage.getItem('contador');
      if (storedConta) setContador(storedConta);
    };

    carregaConta();
  }, []);

  const salvaconta = async () => {
    await AsyncStorage.setItem('contador', contador);
    alert('Contador salvo com sucesso!');
  };
  const aumentarClick = () => {
    setContador(contador + 1);
    salvaconta();
  };
  const dimunuirClick = () => {
    setContador(contador - 1);
    salvaconta();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao MeuApp!</Text>
      <Button title="Clique Aqui" onPress={() => alert('Botão pressionado!')} />
        <View style={styles.linha}>
          <Button title="Diminuir" onPress={() => aumentarClick()} />
          <Button title="Aumentar" onPress={() => dimunuirClick()} />
        </View>
        <Text style={styles.text}>{contador}</Text>
    </View>
  );
};

export default HomeScreen;
