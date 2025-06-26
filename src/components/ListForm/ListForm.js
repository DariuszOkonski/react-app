import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import styles from '../ColumnForm/ColumnForm.module.scss';
import Button from '../Button/Button';

function ListForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addList({ title, description }));

    setTitle('');
    setDescription('');
  };

  return (
    <form
      style={{ marginTop: '2rem' }}
      onSubmit={handleSubmit}
      className={styles.columnForm}
    >
      <label>
        <span className={styles.labelDescription}>Title:</span>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span className={styles.labelDescription}>Description:</span>
        <TextInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <Button>Add column</Button>
    </form>
  );
}

export default ListForm;
