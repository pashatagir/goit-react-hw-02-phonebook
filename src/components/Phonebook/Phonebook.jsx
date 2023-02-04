import React, { Component } from 'react';
import { Form, Label, Input, Button } from './Phonebook.styled';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeName}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChangeNumber}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

// const Phonebook = ({ contacts, name, onChangeInput, addContact }) => (
//   <>
//     <h2>Phonebook</h2>
//     <form onSubmit={addContact}>
//       <label>
//         Name
//         <input
//           type="text"
//           name={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={onChangeInput}
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//     <h2>Contacts</h2>
//     <ul></ul>
//   </>
// );

export default Phonebook;
