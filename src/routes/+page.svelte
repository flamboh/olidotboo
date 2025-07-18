<script>
	import profile from '$lib/assets/profile.jpg';
	import Svelte from '~icons/simple-icons/svelte';
	import TypeScript from '~icons/simple-icons/typescript';
	import React from '~icons/simple-icons/react';
	import Python from '~icons/simple-icons/python';
	import Sql from '~icons/simple-icons/sqlite';
	import Cpp from '~icons/simple-icons/cplusplus';
	import TailwindCSS from '~icons/simple-icons/tailwindcss';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<main class="min-h-screen overflow-x-hidden bg-gray-950">
	<!-- Hero Section -->
	<section class="flex min-h-screen items-center justify-center overflow-hidden px-6">
		<div class="text-center">
			<h2 class="relative mb-4 inline-block text-2xl font-medium text-gray-500 md:text-4xl">
				<span class="relative">Hi, I'm Oliver. Welcome to oli.boo</span><span
					class="absolute top-0 left-full font-medium whitespace-nowrap transition-all duration-300 ease-out"
					>{'o'.repeat(
						Math.floor(
							(scrollY /
								(typeof document !== 'undefined'
									? document.body.scrollHeight - window.innerHeight
									: 1000)) *
								200
						)
					)}</span
				>
			</h2>
			<h1 class="mb-4 text-4xl font-bold text-white md:text-6xl">
				<span>Building and learning, but always</span>
				<br />
				<div class="mt-4">
					<span class="text-gray-500">🔉</span>
					<span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
						>tuned in</span
					>
					<span class="text-gray-500">🎧</span>
				</div>
			</h1>

			<!-- Second line of o's from the left -->
			<span
				class="absolute bottom-8 left-0 inline-block text-2xl font-medium whitespace-nowrap text-gray-500 transition-all duration-300 ease-out md:text-4xl"
				>{'o'.repeat(
					Math.max(
						0,
						Math.floor(
							((scrollY - 220) /
								(typeof document !== 'undefined'
									? document.body.scrollHeight - window.innerHeight
									: 1000)) *
								150
						)
					)
				)}</span
			>
		</div>
	</section>

	<!-- About Section -->
	<section class="flex min-h-screen items-center justify-center px-6 py-16">
		<div class="mx-auto max-w-6xl text-center">
			<div class="mb-16 flex items-center gap-12">
				<div class="flex-shrink-0">
					<img
						src={profile}
						alt="Oliver Boorstein"
						class="h-80 w-64 scale-125 rounded-2xl border-4 border-gray-800 object-cover object-top shadow-xl"
					/>
				</div>
				<div class="flex-1 text-left">
					<h2 class="text-4xl font-bold text-white md:text-6xl">Oliver Boorstein</h2>
					<p class="mb-4 text-sm font-medium text-gray-500 italic md:text-base">
						/Ol-ih-ver Bore-steen/
					</p>
					<p class="mb-6 text-lg font-medium text-gray-300 md:text-xl">
						Researcher and Computer Science Student <br />
						@ University of Oregon
					</p>
					<a
						href="/Oliver_Boorstein_Resume.pdf"
						target="_blank"
						class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
					>
						📄 View Resume
					</a>
				</div>
			</div>

			<!-- Skills Section -->
			<div class="text-center">
				<h2 class="mb-8 text-2xl font-bold text-white md:text-4xl">Skills</h2>
				<div
					class="flex flex-row flex-wrap items-center justify-center gap-8 text-lg font-medium text-gray-300 md:text-xl"
				>
					<Svelte class="scale-150" />
					<React class="scale-150" />
					<TailwindCSS class="scale-150" />
					<TypeScript class="scale-150" />
					<Python class="scale-150" />
					<Cpp class="scale-150" />
					<Sql class="scale-150" />
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="flex min-h-screen items-center justify-center px-6 py-16">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-16 text-center text-4xl font-bold text-white md:text-6xl">My Stuff</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Project 1 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">Research Dashboard</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						A comprehensive data visualization platform for academic research, built with Python and
						React. Features interactive charts, real-time data processing, and collaborative tools
						for research teams.
					</p>
				</div>

				<!-- Project 2 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">Machine Learning Pipeline</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						An automated ML pipeline for predictive analytics using Python and TensorFlow.
						Streamlines data preprocessing, model training, and deployment with containerized
						microservices.
					</p>
				</div>

				<!-- Project 3 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">Student Portal System</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						A full-stack web application for university course management. Built with Node.js,
						React, and PostgreSQL. Includes features for enrollment, grade tracking, and
						communication between students and faculty.
					</p>
				</div>

				<!-- Project 4 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">Algorithm Visualizer</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						An interactive web app that visualizes sorting and pathfinding algorithms. Built with
						TypeScript and Canvas API to help students understand algorithm complexity and behavior.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
