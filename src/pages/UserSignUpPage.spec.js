import React from "react";
import {
	render,
	fireEvent,
	queryByPlaceholderText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserSignUpPage } from "./UserSignUpPage";

describe("UserSignUpPage", () => {
	describe("Layout", () => {
		it("has a header of Sign Up", () => {
			const { container } = render(<UserSignUpPage />);
			const header = container.querySelector("h1");
			expect(header).toHaveTextContent("Sign Up");
		});

		it("has input for username", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const usernameInput = queryByPlaceholderText("Your username");
			expect(usernameInput).toBeInTheDocument();
		});

		it("has input for display name", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const displayNameInput = queryByPlaceholderText("Your display name");
			expect(displayNameInput).toBeInTheDocument();
		});

		it("has input for password", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const passwordInput = queryByPlaceholderText("Your password");
			expect(passwordInput).toBeInTheDocument();
		});

		it("has input for repeat password", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const repeatPasswordInput = queryByPlaceholderText("Repeated password");
			expect(repeatPasswordInput).toBeInTheDocument();
		});

		it("has password type in password input", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const passwordInput = queryByPlaceholderText("Your password");
			expect(passwordInput.type).toBe("password");
		});

		it("has password type in repeat password input", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const repeatPasswordInput = queryByPlaceholderText("Repeated password");
			expect(repeatPasswordInput.type).toBe("password");
		});
	});

	describe("Interactions", () => {
		const changeEvent = (content) => {
			return {
				target: {
					value: content,
				},
			};
		};

		it("sets the username value into state", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const usernameInput = queryByPlaceholderText("Your username");

			fireEvent.change(usernameInput, changeEvent("my-username"));
			expect(usernameInput).toHaveValue("my-username");
		});

		it("sets the display name value into state", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const displayNameInput = queryByPlaceholderText("Your display name");

			fireEvent.change(displayNameInput, changeEvent("my-display-name"));
			expect(displayNameInput).toHaveValue("my-display-name");
		});

		it("sets password value into state", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const passwordInput = queryByPlaceholderText("Your password");

			fireEvent.change(passwordInput, changeEvent("P4ssword"));
			expect(passwordInput).toHaveValue("P4ssword");
		});

		it("sets repeated password into state", () => {
			const { queryByPlaceholderText } = render(<UserSignUpPage />);
			const repeatPasswordInput = queryByPlaceholderText("Repeated password");

			fireEvent.change(repeatPasswordInput, changeEvent("P4ssword"));
			expect(repeatPasswordInput).toHaveValue("P4ssword");
		});

		it("calls postSignup when the fields are valid and the actions are provided in props", () => {
			const actions = {
				postSignup: jest.fn().mockResolvedValueOnce({}),
			};
			const { container, queryByPlaceholderText } = render(
				<UserSignUpPage actions={actions} />,
			);

			const usernameInput = queryByPlaceholderText("Your username");
			const displayNameInput = queryByPlaceholderText("Your display name");
			const passwordInput = queryByPlaceholderText("Your password");
			const repeatPasswordInput = queryByPlaceholderText("Repeated password");

			fireEvent.change(usernameInput, changeEvent("my-username"));
			fireEvent.change(displayNameInput, changeEvent("my-display-name"));
			fireEvent.change(passwordInput, changeEvent("P4ssword"));
			fireEvent.change(repeatPasswordInput, changeEvent("P4ssword"));

			const button = container.querySelector("button");
			fireEvent.click(button);
			expect(actions.postSignup).toHaveBeenCalledTimes(1);
		});

		it("does not throw exception when actions not provided in props", () => {
			const { container, queryByPlaceholderText } = render(<UserSignUpPage />);

			const usernameInput = queryByPlaceholderText("Your username");
			const displayNameInput = queryByPlaceholderText("Your display name");
			const passwordInput = queryByPlaceholderText("Your password");
			const repeatPasswordInput = queryByPlaceholderText("Repeated password");

			fireEvent.change(usernameInput, changeEvent("my-username"));
			fireEvent.change(displayNameInput, changeEvent("my-display-name"));
			fireEvent.change(passwordInput, changeEvent("P4ssword"));
			fireEvent.change(repeatPasswordInput, changeEvent("P4ssword"));

			const button = container.querySelector("button");
			expect(() => fireEvent.click(button)).not.toThrow();
		});
	});
});
