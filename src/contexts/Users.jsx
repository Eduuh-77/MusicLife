import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([
    {
      email: 'teste@email.com',
      password: 'teste123'
    }
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        setIsAuthenticated(true);
        return navigation.navigate('Teste')
      }
    })
  }

  const register = async (email, password, username) => {
    setUsers([...users, { email, password, username }], console.log(users))
    return navigation.navigate('SignIn')
  }

  return (
    <UsersContext.Provider value={{ login, register, isAuthenticated }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
