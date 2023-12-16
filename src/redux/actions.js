import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');

const deleteContact = createAction('contacts/deleteContact');

const setFilterStatus = createAction('filter/setFilterStatus');

export { addContact, deleteContact, setFilterStatus };
