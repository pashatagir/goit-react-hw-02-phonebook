import React from 'react';
import { Label, Input } from '../Phonebook/Phonebook.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contact by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;
