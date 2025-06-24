import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContainer}>
          <Link to='/'>
            <i className='fa fa-tasks'></i>
          </Link>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorite'>Favorite</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
