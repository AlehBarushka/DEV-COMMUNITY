import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<Link to='/profile' className={styles}>
					Profile
				</Link>
			</div>
			<div className={styles.item}>
				<Link to='/dialogs' className={styles}>
					Messages
				</Link>
			</div>
			<div className={styles.item}>
				<Link to='/users' className={styles}>
					Users
				</Link>
			</div>

			<div className={styles.item}>
				<Link to='/settings' className={styles}>
					Settings
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
