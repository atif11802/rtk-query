"use client";
import React, { useState } from "react";
import { login, logout, toggle } from "../redux/features/auth/auth-slice";
import { useDispatch } from "react-redux";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const onClickLogin = () => {
		dispatch(login(username));
	};

	const onCLickToggle = () => {
		dispatch(toggle());
	};

	const onCLickLogout = () => {
		dispatch(logout(username));
	};

	const handleInput = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "username":
				setUsername(value);
				break;
			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	return (
		<div className=''>
			<input
				className='text-input bg-black text-white'
				type='text'
				name='username'
				onChange={handleInput}
			/>
			<input
				className='text-input bg-black text-white'
				type='text'
				name='password'
				onChange={handleInput}
			/>
			<br />
			<button onClick={onClickLogin}>Login</button>
			<br />
			<button onClick={onCLickLogout}>log out</button>
			<br />
			<button onClick={onCLickToggle}>toggle</button>
		</div>
	);
};

export default Login;
