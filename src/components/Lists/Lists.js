import { useSelector } from 'react-redux';
import styles from './Lists.module.scss';
import { Link } from 'react-router-dom';
import ListForm from '../ListForm/ListForm';
import { getAllLists } from '../../redux/listsRedux';

function Lists() {
  const lists = useSelector(getAllLists);
  return (
    <div className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map((list) => (
        <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}

      <ListForm />
    </div>
  );
}

export default Lists;
