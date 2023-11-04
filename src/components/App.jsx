import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.mainDiv}>
      <Phonebook onClickAddContact />
      <Contacts onDeleteContact />
    </div>
  );
}