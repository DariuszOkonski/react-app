import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addColumn({ title, icon, listId }));

    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>
        <span className={styles.labelDescription}>Title:</span>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span className={styles.labelDescription}>Icon:</span>
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
