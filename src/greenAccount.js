import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const GreenBalance = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="Account Number" />
            <TextField source="Product" />
            <TextField source="Status" />
            <TextField source="Green Balance" />
        </Datagrid>
    </List>
);