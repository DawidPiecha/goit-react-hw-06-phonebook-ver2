import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilterStatus } from './actions';

const savedContacts = JSON.parse(localStorage.getItem('contacts'));

const contactsInitialState = savedContacts || [];

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    });
});

const filterInitialState = {
  status: '',
};

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilterStatus, (state, action) => {
    state.status = action.payload;
  });
});
