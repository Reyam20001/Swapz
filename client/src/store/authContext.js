import {createContext} from 'react';

const AuthContext = createContext
({
  username: '',
  id: '',
  token: '',
  login: (id, username, token) => {},
  logout: () => {}
});

export default AuthContext;
