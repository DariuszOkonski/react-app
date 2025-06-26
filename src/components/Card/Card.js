import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <li className={styles.card}>
      {props.title}
      <i className='fa fa-star-o'></i>
    </li>
  );
};

export default Card;
