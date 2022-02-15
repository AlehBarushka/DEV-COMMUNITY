import { Link } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
	const { id, name } = props;

	let path = '/dialogs/' + id;

	return (
		<div className={styles.dialog}>
			<Link to={path} className={styles}>
				{name}
			</Link>
		</div>
	);
};

export default DialogItem;
