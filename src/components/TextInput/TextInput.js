import styles from './TextInput.module.scss';

const TextInput = (props) => {
  return (
    <input
      type='text'
      placeholder={props.placeholder}
      className={styles.input}
    />
  );
};

export default TextInput;
