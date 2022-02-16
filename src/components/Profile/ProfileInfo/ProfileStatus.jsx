import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
	const { userStatus, updateStatus } = props;
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(userStatus);

	// componentDidUpdate()
	useEffect(() => {
		if (status !== userStatus) {
			setStatus(userStatus);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userStatus]);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		updateStatus(status);
	};

	const onStatusChange = (e) => {
		const statusText = e.target.value;
		setStatus(statusText);
	};

	return (
		<div>
			{!editMode ? (
				<div>
					<span onDoubleClick={activateEditMode}>{userStatus || '---'}</span>
				</div>
			) : (
				<div>
					<input
						type='text'
						onChange={onStatusChange}
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			)}
		</div>
	);
};

export default ProfileStatus;
