import styles from './TextInput.module.scss';

const TextInput = (props) => {
  return (
    <input
      type='text'
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={styles.input}
    />
  );
};

export default TextInput;
