import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './src/screens/Auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoginErrorScreen from './src/screens/LoginErrorScreen';
import ForgotPasswordScreen from './src/screens/ForgetPasswordScreen';
import VerifyAccountScreen from './src/screens/VerifyAccountScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodHomeScreen from './src/screens/FoodHomeScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';
import SearchScreen from './src/screens/SearchScreen';
import TabBarIcon from './src/components/TabBarIcon';
import FilterScreen from './src/screens/FilterScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import MenuDetailScreen from './src/screens/MenuDetailScreen';
import CartScreen from './src/screens/CartScreen';
import MyAddressScreen from './src/screens/MyAddressScreen';
import AddressMapScreen from './src/screens/AddressMapScreen';
import PaymentMethodsScreen from './src/screens/PaymentMethodsScreen';
import OrderConfirmationScreen from './src/screens/OrderConfirmationScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';
import DeliveryTrackingScreen from './src/screens/DeliveryTrackingScreen';
import DeliveryMapScreen from './src/screens/DeliveryMapScreen';
import ChatScreen from './src/screens/ChatScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import PersonalInfoScreen from './src/screens/PersonalInfoScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import PlaceOrderCart from './src/screens/PlaceOrderCart';
import AboutThisMenu from './src/screens/AboutThisMenu';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          paddingBottom: 5,
          paddingTop: 5,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FoodHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="settings" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginError" component={LoginErrorScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
      <Stack.Screen name="MenuDetail" component={MenuDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="MyAddress" component={MyAddressScreen} />
      <Stack.Screen name="AddressMapScreen" component={AddressMapScreen} />
      <Stack.Screen name="PlaceOrderCart" component={PlaceOrderCart} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen
        name="DeliveryTrackingScreen"
        component={DeliveryTrackingScreen}
      />
      <Stack.Screen name="DeliveryMapScreen" component={DeliveryMapScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="AboutThisMenu" component={AboutThisMenu} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
