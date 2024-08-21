import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function Footer({navigation}){
  return(
    <View style={styles.footer}>
      <TouchableOpacity 
      style={styles.footerButton} 
      onPress={() => navigation.navigate('Ínicio')}>

        <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Histórico')} style={styles.footerButton}>
          <Text style={styles.footerText}>Histórico</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    footerButton: {
        padding: 10,
    },
    footerText: {
        fontSize: 20,
        color: '#000',
    },
})