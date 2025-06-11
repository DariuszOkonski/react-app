import Card from '../Card/Card';
import styles from './Column.module.scss';

const Column = (props) => {
  console.log(props.cards);

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul>
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
    </article>
  );
};

export default Column;
