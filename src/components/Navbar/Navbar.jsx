import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<Link to='/profile' activeClassName={styles.active}>
					Profile
				</Link>
			</div>
			<div className={styles.item}>
				<Link to='/dialogs' activeClassName={styles.active}>
					Messages
				</Link>
			</div>
			<div className={styles.item}>
				<Link to='/users' activeClassName={styles.active}>
					Users
				</Link>
			</div>

			<div className={styles.item}>
				<Link to='/settings' activeClassName={styles.active}>
					Settings
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
