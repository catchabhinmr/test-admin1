import React from 'react';
import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import { AccountStatement } from './account';
import { GreenBalance } from './greenAccount';
import PetsIcon from '@material-ui/icons/Pets';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './dashboard';
import authProvider from './authProvider';
const dataProvider = jsonServerProvider('./statement.json');
const App = () => (
     <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
          <Resource name="account" list={AccountStatement} icon = {UserIcon} />
          <Resource name="greenAccount" list={GreenBalance} icon = {PetsIcon} />
      </Admin>
  );
export default App;
