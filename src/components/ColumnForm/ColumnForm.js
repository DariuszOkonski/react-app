import { useState } from 'react';
import styles from './ColumnForm.module.scss';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title, icon });
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Icon:
        <input
          type='text'
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </label>
      <button>Add column</button>
    </form>
  );
};

export default ColumnForm;
