import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: '#F3F3F3',
          height: 70
        },

        headerBackground: () => (
          <View style={{
            flexDirection: 'row',
            marginTop: 30,
          }}>
           
            <Text style={{ fontSize: 15 ,fontWeight: 'bold',}}>Chats</Text>
            
          </View>
        ),
        headerBackgroundContainerStyle: {
          justifyContent: 'center',
          backgroundColor: '#F3F3F3',
          alignItems: 'center'
        },
        title: ''

      }}
      

    >
      <Tab.Screen
        name='TabsContato'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
              <Icon name="person-circle" size={17} color={focused ? "#0C79DB" : '#8D9191'} />
              <Text style={{ fontSize: 15, color: focused ? "#0C79DB" : '#8D9191' }}>Contatos</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name='TabsHome'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
              <Icon name="chatbubbles-sharp" size={17} color={focused ? "#0C79DB" : '#8D9191'} />
              <Text style={{ fontSize: 15, color: focused ? "#0C79DB" : '#8D9191' }}>Chats</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name='TabsProfile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
              <Icon name="person" size={17} color={focused ? "#0C79DB" : "#8D9191"} />
              <Text style={{ fontSize: 15, color: focused ? "#0C79DB" : '#8D9191' }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}