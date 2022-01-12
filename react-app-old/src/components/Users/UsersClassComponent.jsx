import React, { Component } from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

import unknowUser from '../../assets/img/unknowUser.jpg';

class UsersClassComponent extends Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pagesArr = [];

		for (let i = 1; i <= pagesCount; i++) {
			pagesArr.push(i);
		}
		return (
			<div>
				<div>
					{pagesArr.map((page) => (
						<span
							key={page}
							className={this.props.currentPage === page ? styles.selectedPage : null}
							onClick={() => {
								this.onPageChanged(page);
							}}
						>
							{page}
						</span>
					))}
				</div>
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
					</div>
				))}
			</div>
		);
	}
}

export default UsersClassComponent;
