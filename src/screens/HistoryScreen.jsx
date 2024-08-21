import {useContext, createContext} from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import styles from '../constants/styles'
import Footer from '../components/Footer.jsx'

export const HistoryContext = createContext()
export const useHistory = () => useContext(HistoryContext)


export default function HistoryScreen({ navigation }) {
  const { history } = useContext(HistoryContext)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Histórico</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <Text style={styles.historyItem}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      <Footer />
      
    </SafeAreaView>
  )
}



