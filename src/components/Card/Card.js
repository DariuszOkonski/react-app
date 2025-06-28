import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <i
        style={props.isFavorite ? { color: '#e1644e' } : {}}
        className='fa fa-star-o'
        onClick={handleClick}
      ></i>
    </li>
  );
};

export default Card;
