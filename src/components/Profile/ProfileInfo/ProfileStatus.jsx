import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	// componentDidUpdate()
	useEffect(() => {
		if (status !== props.status) {
			setStatus(props.status);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		const statusText = e.target.value;
		setStatus(statusText);
	};

	return (
		<div>
			{!editMode ? (
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
				</div>
			) : (
				<div>
					<input type='text' onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
				</div>
			)}
		</div>
	);
};

export default ProfileStatus;
