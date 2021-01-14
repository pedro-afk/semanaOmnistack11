//1º importe as dependencias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//2º crie a variável que irá definir as rotas
const AppStack = createStackNavigator();

//3º importe as rotas
import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

//4º crie o componente que irá fazer as rotas
export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}