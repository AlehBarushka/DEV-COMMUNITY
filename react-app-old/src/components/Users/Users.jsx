import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

import unknowUser from '../../assets/img/unknowUser.jpg';

const Users = (props) => {
	const getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
				props.setUsers(response.data.items);
			});
		}
	};

	return (
		<div>
			<button onClick={getUsers}>Get users</button>
			{props.users.map((user) => (
				<div key={user.id}>
					<div className={styles.ava}>
						<img src={user.photos.small != null ? user.photos.small : unknowUser} alt={user.name} />
					</div>
					<div>
						{user.followed ? (
							<button
								onClick={() => {
									props.unfollow(user.id);
								}}
							>
								Unfollow
							</button>
						) : (
							<button
								onClick={() => {
									props.follow(user.id);
								}}
							>
								follow
							</button>
						)}
					</div>
					<div>{user.name}</div>
					<div>{user.status}</div>
					<div>{'user.location.country'}</div>
					<div>{'user.location.city'}</div>
				</div>
			))}
		</div>
	);
};

export default Users;
