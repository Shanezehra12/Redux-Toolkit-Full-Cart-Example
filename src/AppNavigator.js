import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MyProduct from '../src/screens/MyProduct';
import MyCart from './newredux/MyCart';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MyProduct"
          component={MyProduct}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="MyCart"
          component={MyCart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
