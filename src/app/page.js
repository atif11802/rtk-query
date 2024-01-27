import React from "react";
import Image from "next/image";

export default function Home() {
	return (
		<div className='flex min-h-screen'>
			{/* Sidebar */}
			<aside className='w-1/4 bg-gray-200 p-4'>
				{/* Sidebar content */}
				<p>Sidebar</p>
			</aside>

			{/* Main Content */}
			<main className='w-3/4 p-4'>
				{/* Navbar */}
				<nav className='mb-4'>
					{/* Navbar content */}
					<p>Navbar</p>
				</nav>

				{/* Main Wrapper */}
				<div className='flex'>
					<div className='left-content mr-4'>
						{/* Left Content */}
						<h1>Hello</h1>
					</div>
					<div className='right-content'>
						{/* Right Content */}
						<h2>Mew Mew</h2>
					</div>
				</div>
			</main>
		</div>
	);
}

//cc
