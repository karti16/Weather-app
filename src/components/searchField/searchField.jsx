import { useState } from 'react';
import styles from './searchField.module.scss';
import { useStore } from '../../store/store';

const SearchField = () => {
  return (
    <div className={styles.nav}>
      <input className="" type="text" placeholder="Search city"></input>
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchField;
