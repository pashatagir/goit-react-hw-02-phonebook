import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
  };

  id = nanoid();

  addContact = (name, number) => {
    const contact = {
      id: this.id,
      name,
      number,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
