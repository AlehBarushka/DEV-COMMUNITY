import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://picsum.photos/seed/picsum/1000/500" alt="" />
      </div>
      <div className={styles['description-block']}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
