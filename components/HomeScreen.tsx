import React, {useState} from 'react';
import {AppBar} from '@react-native-material/core';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SettingsTab from './SettingsTab';
import CartTab from './CartTab';
import ProductsTab from './ProductsTab';
import {StyleSheet, View} from 'react-native';
import VectorImage from 'react-native-vector-image'

const Tab = createMaterialBottomTabNavigator();

function HomeScreen(): JSX.Element {
  const [title, setTitle] = useState('Products');
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={ProductsTab}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color}) => (
            <VectorImage source={require('../assets/apps_black_24dp.svg')} tintColor={"#990000"} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartTab}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <VectorImage source={require('../assets/shopping_cart_black_24dp.svg')} tintColor={"#990000"} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsTab}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <VectorImage source={require('../assets/settings_black_24dp.svg')} tintColor={"#990000"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tabs: {
    flex: 1,
  },
});

export default HomeScreen;
