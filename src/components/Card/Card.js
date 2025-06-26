import styles from './Card.module.scss';

const Card = (props) => {
  console.log(props.isFavorite);

  return (
    <li className={styles.card}>
      {props.title}
      <i
        style={props.isFavorite ? { color: '#e1644e' } : {}}
        className='fa fa-star-o'
      ></i>
    </li>
  );
};

export default Card;
