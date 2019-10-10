import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const AccountStatement = props => (
    
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="Account number"/>
            <TextField source="Name" />
            <TextField source="Account Balance"/>
            
        </Datagrid>
    </List>
);