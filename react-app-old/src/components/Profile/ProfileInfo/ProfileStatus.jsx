import React, { Component } from 'react';

export default class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = (e) => {
		const statusText = e.target.value;
		this.setState({
			status: statusText,
		});
	};

	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
					</div>
				) : (
					<div>
						<input
							type='text'
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.deactivateEditMode}
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		);
	}
}
