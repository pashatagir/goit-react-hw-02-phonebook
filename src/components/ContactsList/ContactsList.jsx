import React from 'react';
import { List, Item, FieldName, FieldNum } from './ContactsList.styled';

const ContactsList = ({ contacts }) => (
  <List>
    {contacts.map(
      ({ id, name, number }) =>
        id && (
          <Item key={id}>
            <FieldName>{name}:</FieldName>
            <FieldNum>{number}</FieldNum>
          </Item>
        )
    )}
  </List>
);

export default ContactsList;
