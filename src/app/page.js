"use client";
import React from "react";
import Image from "next/image";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useListPostsQuery } from "../redux/services/productApi";
import Posts from "./Posts";

export default function Home() {
	const { data, isLoading, error } = useListPostsQuery({});
	const userName = useSelector((state) => {
		return state.authSlice.value.userName;
	});

	const toggle = useSelector((state) => {
		return state.authSlice.value.toggle;
	});

	if (error) return <p>error</p>;

	return (
		<div className='flex flex-col min-h-screen'>
			<Login />
			<h1 className='flex items-center justify-center w-full h-full text-2xl text-center text-white'>
				userName : {userName}
			</h1>
			<p className='flex items-center justify-center w-full h-full text-2xl text-center text-white'>
				{toggle ? "true" : "false"}
			</p>

			{isLoading ? <p>loading...</p> : <Posts rows={data} />}
		</div>
	);
}

//cc
