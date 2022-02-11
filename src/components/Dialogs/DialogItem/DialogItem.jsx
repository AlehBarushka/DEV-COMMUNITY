import { Link } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={styles.dialog}>
			<Link to={path} className={styles}>
				{props.name}
			</Link>
		</div>
	);
};

export default DialogItem;
