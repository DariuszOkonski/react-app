import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import {
  getSearchString,
  updateSearchString,
} from '../../redux/searchStringRedux';

const SearchForm = () => {
  const searchString = useSelector(getSearchString);
  const [searchInput, setSearchInput] = useState(searchString);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;

    dispatch(updateSearchString(searchInput));
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
