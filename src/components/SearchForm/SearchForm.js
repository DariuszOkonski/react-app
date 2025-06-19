import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useState } from 'react';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;

    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchInput });
    setSearchInput('');
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchInput}
        onChange={handleChange}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
