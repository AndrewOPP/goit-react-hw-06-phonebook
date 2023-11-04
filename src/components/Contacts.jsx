import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { addFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const filteredArr = (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const dispatch = useDispatch();
  const getContacts = useSelector(state => state.contacts);
  const getFilter = useSelector(state => state.filters);
  const filteredContacts = filteredArr(getContacts, getFilter);

  const deleteContac = userId => {
    dispatch(deleteContact(userId));
  };

  const onFindHundler = filterValue => {
    dispatch(addFilter(filterValue));
  };

  return (
    <>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        onChange={evt => {
          onFindHundler(evt.currentTarget.value);
        }}
        type="text"
      />
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.deleteButton}
              onClick={() => deleteContac(id)}
              type="button"
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
