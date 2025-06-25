import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import styles from './List.module.scss';
import { getColumnsByList, getListById } from '../../redux/store';

const List = () => {
  const TEMP_LIST_ID = 1;

  const listData = useSelector(({ lists }) =>
    getListById({ lists }, TEMP_LIST_ID)
  );

  const columns = useSelector(({ columns }) =>
    getColumnsByList({ columns }, TEMP_LIST_ID)
  );

  console.log('listData: ', listData);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>

      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>

      <ColumnForm />
    </div>
  );
};

export default List;
