import React, { Component } from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

import unknowUser from '../../assets/img/unknowUser.jpg';

class UsersClassComponent extends Component {
	constructor(props) {
		super(props);
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return (
			<div>
				{this.props.users.map((user) => (
					<div key={user.id}>
						<div className={styles.ava}>
							<img src={user.photos.small != null ? user.photos.small : unknowUser} alt={user.name} />
						</div>
						<div>
							{user.followed ? (
								<button
									onClick={() => {
										this.props.unfollow(user.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										this.props.follow(user.id);
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
	}
}

export default UsersClassComponent;
