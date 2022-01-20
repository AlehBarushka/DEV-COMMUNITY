import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';

import unknowUser from '../../assets/img/unknowUser.jpg';
import { usersAPI } from '../../api/api';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pagesArr = [];
	for (let page = 1; page <= pagesCount; page++) {
		pagesArr.push(page);
	}

	return (
		<div>
			<div>
				{pagesArr.map((page) => (
					<span
						key={page}
						className={props.currentPage === page ? styles.selectedPage : null}
						onClick={() => {
							props.onPageChanged(page);
						}}
					>
						{page}
					</span>
				))}
			</div>
			{props.users.map((user) => (
				<div key={user.id}>
					<div className={styles.ava}>
						<NavLink to={'/profile/' + user.id}>
							<img src={user.photos.small != null ? user.photos.small : unknowUser} alt={user.name} />
						</NavLink>
					</div>
					<div>
						{user.followed ? (
							<button
								disabled={props.followingInProgress.some((id) => id === user.id)}
								onClick={() => {
									props.toggleFollowingProgress(true, user.id);
									usersAPI.unfollow(user.id).then((response) => {
										if (response.data.resultCode === 0) {
											props.unfollow(user.id);
										}
										props.toggleFollowingProgress(false, user.id);
									});
								}}
							>
								Unfollow
							</button>
						) : (
							<button
								disabled={props.followingInProgress.some((id) => id === user.id)}
								onClick={() => {
									props.toggleFollowingProgress(true, user.id);
									usersAPI.follow(user.id).then((response) => {
										if (response.data.resultCode === 0) {
											props.follow(user.id);
										}
										props.toggleFollowingProgress(false, user.id);
									});
								}}
							>
								follow
							</button>
						)}
					</div>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</div>
			))}
		</div>
	);
};

export default Users;
