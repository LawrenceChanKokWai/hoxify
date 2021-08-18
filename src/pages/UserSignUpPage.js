import React from "react";

export class UserSignUpPage extends React.Component {
	state = {
		username: "",
		displayName: "",
		password: "",
		repeatPassword: "",
	};

	onChangeUsername = (event) => {
		const value = event.target.value;
		this.setState({ username: value });
	};

	onChangeDisplayName = (event) => {
		const value = event.target.value;
		this.setState({ displayName: value });
	};

	onChangePassword = (event) => {
		const value = event.target.value;
		this.setState({ password: value });
	};

	onChangeRepeatPassword = (event) => {
		const value = event.target.value;
		this.setState({ repeatPassword: value });
	};

	onClickSignup = () => {
		this.props.actions.postSignup();
	};

	render() {
		return (
			<div>
				<h1>Sign Up</h1>
				<div>
					<input
						placeholder="Your username"
						value={this.state.username}
						onChange={this.onChangeUsername}
					/>
				</div>
				<div>
					<input
						placeholder="Your display name"
						value={this.state.displayName}
						onChange={this.onChangeDisplayName}
					/>
				</div>
				<div>
					<input
						placeholder="Your password"
						type="password"
						value={this.state.password}
						onChange={this.onChangePassword}
					/>
				</div>
				<div>
					<input
						placeholder="Repeated password"
						type="password"
						value={this.state.repeatPassword}
						onChange={this.onChangeRepeatPassword}
					/>
				</div>
				<button onClick={this.onClickSignup}>Sign Up</button>
			</div>
		);
	}
}
UserSignUpPage.defaultProps = {
	actions: {
		postSignup: () =>
			new Promise((resolve, reject) => {
				resolve({});
			}),
	},
};
export default UserSignUpPage;
