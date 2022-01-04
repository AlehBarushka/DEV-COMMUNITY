import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				avatarUrl: 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg',
				fullName: 'Oleg',
				status: 'busy',
				followed: false,
				location: {
					city: 'Minsk',
					country: 'Belarus',
				},
			},
			{
				id: 2,
				avatarUrl: 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg',
				fullName: 'Igor',
				status: 'Available',
				followed: true,
				location: {
					city: 'Moscow',
					country: 'Russia',
				},
			},
			{
				id: 3,
				avatarUrl: 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-19.jpg',
				fullName: 'Olya',
				status: 'Do Not Disturb',
				followed: false,
				location: {
					city: 'Kiev',
					country: 'Ukraine',
				},
			},
		]);
	}

	return (
		<div>
			{props.users.map((user) => (
				<div key={user.id}>
					<div className={styles.ava}>
						<img src={user.avatarUrl} alt={user.fullName} />
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
					<div>{user.fullName}</div>
					<div>{user.status}</div>
					<div>{user.location.country}</div>
					<div>{user.location.city}</div>
				</div>
			))}
		</div>
	);
};

export default Users;
