import styles from './ProfileInfo.module.css';

import Preloader from '../../Common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	const { profile, userStatus, updateStatus } = props;

	if (!profile) {
		return <Preloader />;
	}

	return (
		<div className={styles['description-block']}>
			<img src={profile.photos.large} alt='ava' />
			<ProfileStatus userStatus={userStatus} updateStatus={updateStatus} />
		</div>
	);
};

export default ProfileInfo;
