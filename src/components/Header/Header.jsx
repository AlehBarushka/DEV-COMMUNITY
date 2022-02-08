import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img
				src='https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300'
				alt='logo'
			/>
			<div className={styles.loginBlock}>{props.isAuth ? props.login : <Link to={'/login'}>Login</Link>}</div>
		</header>
	);
};

export default Header;
