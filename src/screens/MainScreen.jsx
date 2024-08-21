import { useState, useContext } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import {useHistory, HistoryContext } from './HistoryScreen.jsx'
import styles from '../constants/styles'
import DiceButton from '../components/DiceButton.jsx'
import Footer from '../components/Footer.jsx'

export default function MainScreen({ navigation }) {
  const [diceResult, setDiceResult] = useState('')
  // const { history, setHistory } = useContext(HistoryContext)
  const [history, setHistory] = useState('')
  /** 
  * @param (number)
  * @returns(number)
  * @description Sorteia um número entre 1 e x, retornadno o valor sorteado aleatoriamente
  */
   function rollDice(x){
     const result = Math.floor(Math.random() * x) + 1
     setDiceResult(result)
     setHistory([...history, result])
   }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{diceResult}</Text>
      </View>

      <View style={styles.diceContainer}>
        <View style={styles.backgroundRectangle}>
          <View style={styles.row}>
            <DiceButton dice='2' rollDice={() => rollDice(2)}/>
            <DiceButton dice='4' rollDice={() => rollDice(4)}/>
            <DiceButton dice='6' rollDice={() => rollDice(6)}/>
            <DiceButton dice='8' rollDice={() => rollDice(8)}/>
          </View>
          <View style={styles.row}>
            <DiceButton dice='10' rollDice={() => rollDice(10)}/>
            <DiceButton dice='12' rollDice={() => rollDice(12)}/>
            <DiceButton dice='20' rollDice={() => rollDice(20)}/>
            <DiceButton dice='100' rollDice={() => rollDice(100)}/>
          </View>
        </View>
      </View>

      <Footer navigation={navigation}/>
    </SafeAreaView>
  )
}


    

