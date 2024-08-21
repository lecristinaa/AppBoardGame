import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {HistoryContext} from './src/screens/HistoryScreen.jsx'
import HistoryScreen from './src/screens/HistoryScreen.jsx'
import MainScreen from './src/screens/MainScreen.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
    const [history, setHistory] = useState([])

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Ínicio">
                    <Stack.Screen name="Ínicio" component={MainScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Histórico" component={HistoryScreen} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </HistoryContext.Provider>
    )
}


