import styles from './ProfileInfo.module.css';

import Preloader from '../../Common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div>
			{/* <div>
				<img src='https://picsum.photos/seed/picsum/1000/500' alt='pic' />
			</div> */}
			<div className={styles['description-block']}>
				<img src={props.profile.photos.large} alt='ava' />
				<ProfileStatus status='this is status' />
			</div>
		</div>
	);
};

export default ProfileInfo;
