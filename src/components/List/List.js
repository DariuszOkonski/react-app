import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import styles from './List.module.scss';
import { Navigate, useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';

const List = () => {
  const { listId } = useParams();

  const listData = useSelector(({ lists }) => getListById({ lists }, listId));

  const columns = useSelector(({ columns }) =>
    getColumnsByList({ columns }, listId)
  );

  if (!listData) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>

      <SearchForm />

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
