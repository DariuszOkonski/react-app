import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCard, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCard(props.id));
  };

  const handleRemoveCardClick = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.cardIconsContainer}>
        <i
          style={props.isFavorite ? { color: '#e1644e' } : {}}
          className='fa fa-star-o'
          onClick={handleFavoriteClick}
        ></i>
        <i className='fa fa-trash' onClick={handleRemoveCardClick}></i>
      </div>
    </li>
  );
};

export default Card;
