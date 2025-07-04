import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' ' + props.icon}></span>
        {props.title}
      </h2>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>

      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
