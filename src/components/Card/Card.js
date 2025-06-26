import styles from './Card.module.scss';

const Card = (props) => {
  console.log(props.title);
  return (
    <li className={styles.card}>
      {props.title}
      <button>star</button>
    </li>
  );
};

export default Card;
