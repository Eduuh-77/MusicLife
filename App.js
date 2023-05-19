import React from "react";
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from "./src/routes";
import { UsersContextProvider } from "./src/contexts/Users";

export default function App() {
  return (
    <NavigationContainer>
      <UsersContextProvider>
        <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
        <Routes />
      </UsersContextProvider>
    </NavigationContainer>
  );
}