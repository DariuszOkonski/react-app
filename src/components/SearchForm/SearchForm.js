import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder='Search...' />
      <Button>Search</Button>
    </form>
  );
};

export default SearchForm;
