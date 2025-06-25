import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContainer}>
          <NavLink to='/'>
            <i className='fa fa-tasks'></i>
          </NavLink>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/favorite'
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/about'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
