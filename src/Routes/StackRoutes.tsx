import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../Pages/Login';
import { BottomTabsRoutes } from './BottomTabsRoutes';

export type ParametrosDaRota = {
  StackLogin: {name: string};
  StackTabsPages: {name: string};
  StackHome: {name: string};
}

const Stack = createNativeStackNavigator<ParametrosDaRota>();

export function StackRoutes() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackTabsPages" component={BottomTabsRoutes} />
        <Stack.Screen name="StackHome" component={BottomTabsRoutes} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}