import { StyleSheet} from "react-native"

const styleSobre = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    texto: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    }
  });

  const styleInicio = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    titulo:{
        fontSize: 24,
        color: 'teal'
    }
})

  export {styleSobre, styleInicio}