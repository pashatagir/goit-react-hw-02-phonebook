import React from 'react';
import {
  List,
  Item,
  FieldName,
  FieldNum,
  DeleteBtn,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(
      ({ id, name, number }) =>
        id && (
          <Item key={id}>
            <FieldName>{name}:</FieldName>
            <FieldNum>{number}</FieldNum>
            <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DeleteBtn>
          </Item>
        )
    )}
  </List>
);

export default ContactsList;
