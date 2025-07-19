<script>
	import { error } from '@sveltejs/kit';
	import Svelte from '~icons/simple-icons/svelte';
	import TypeScript from '~icons/simple-icons/typescript';
	import React from '~icons/simple-icons/react';
	import Python from '~icons/simple-icons/python';
	import Sql from '~icons/simple-icons/sqlite';
	import Cpp from '~icons/simple-icons/cplusplus';
	import TailwindCSS from '~icons/simple-icons/tailwindcss';
	import LinkedIn from '~icons/simple-icons/linkedin';
	import Github from '~icons/simple-icons/github';

	import { fade } from 'svelte/transition';

	let scrollY = $state(0);
	let bottomReached = $state(false);
	let bottomOCount = $state(0);
	let showCopiedMessage = $state(false);
	let innerWidth = $state(0);

	let waveformCount = $derived(innerWidth >= 1800 ? 350 : innerWidth >= 1024 ? 200 : 100);

	$effect(() => {
		if (typeof window !== 'undefined') {
			const isAtBottom = scrollY + window.innerHeight >= document.body.scrollHeight - 100;
			if (isAtBottom && !bottomReached) {
				bottomReached = true;
				startBottomAnimation();
			}
		}
	});

	function startBottomAnimation() {
		setTimeout(() => {
			const interval = setInterval(() => {
				bottomOCount += 1;
				if (bottomOCount >= 100) {
					clearInterval(interval);
				}
			}, 100); // Add one "o" every 100ms
		}, 5000); // Wait 5 seconds before starting
	}

	function copyEmailToClipboard() {
		const email = 'oliver.boorstein@gmail.com';
		navigator.clipboard
			.writeText(email)
			.then(() => {
				showCopiedMessage = true;
				setTimeout(() => {
					showCopiedMessage = false;
				}, 1000);
			})
			.catch((err) => {
				console.error('Failed to copy email: ', err);
			});
	}
</script>

<svelte:window bind:scrollY bind:innerWidth />

<!-- Animated Background -->
<div class="waveform-background"></div>
<div class="waveform-bars">
	{#each Array(waveformCount) as _, i}
		{@const barsPerBand = Math.max(10, Math.floor(waveformCount / 20))}
		{@const frequencyBand = Math.floor(i / barsPerBand)}
		{@const positionInBand = i % barsPerBand}
		{@const bandCenter = Math.floor(barsPerBand / 2)}
		{@const distanceFromCenter = Math.abs(positionInBand - bandCenter)}
		{@const bandFalloff = Math.exp(-distanceFromCenter * 0.15)}
		{@const bassBoost = frequencyBand < 4 ? 1.5 : 1}
		{@const midBoost = frequencyBand >= 4 && frequencyBand < 12 ? 1.3 : 1}
		{@const trebleBoost = frequencyBand >= 12 ? 0.8 : 1}
		{@const baseHeight =
			(20 + frequencyBand * 8) * bandFalloff * bassBoost * midBoost * trebleBoost}
		{@const rhythmVariation = Math.sin(i * 0.2 + frequencyBand) * 15}
		{@const targetHeight = Math.max(8, Math.min(95, baseHeight + rhythmVariation))}
		{@const groupDelay = frequencyBand * 0.1 + positionInBand * 0.02}
		<div
			class="waveform-bar"
			style="animation-delay: {groupDelay}s; --target-height: {targetHeight}%;"
		></div>
	{/each}
</div>

<main class="relative min-h-screen overflow-x-hidden">
	<!-- Hero Section -->
	<section class="flex min-h-screen items-center justify-center overflow-hidden px-6">
		<div class="text-center">
			<h2 class="relative mb-4 inline-block text-2xl font-medium text-gray-500 md:text-4xl">
				<span class="relative">Hi, I'm Oliver. </span>
				<!-- <span
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
				> -->
			</h2>
			<h1 class="mb-4 text-4xl font-bold text-white md:text-6xl">
				<span>Building and learning, but always</span>
				<br />
				<div class="mt-4">
					<span
						class="tuned-in-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
						>tuned in</span
					>
				</div>
			</h1>

			<!-- Social Icons -->
			<div class="mt-8 flex justify-center gap-12">
				<a
					href="https://linkedin.com/in/oliboo"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors duration-200 hover:text-blue-500"
				>
					<LinkedIn class="h-8 w-8" />
				</a>
				<a
					href="https://github.com/flamboh"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors duration-200 hover:text-white"
				>
					<Github class="h-8 w-8" />
				</a>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="flex min-h-screen items-center justify-center px-6 py-16">
		<div class="mx-auto max-w-6xl text-center">
			<div class="mb-16 flex flex-col items-center gap-12 md:flex-row">
				<div class="flex-shrink-0">
					<img
						src="/profile.JPG"
						alt="Oliver Boorstein"
						class="h-80 w-64 scale-125 rounded-2xl border-4 border-gray-800 object-cover object-top shadow-xl"
					/>
				</div>
				<div class="relative flex-1 text-left">
					<h2 class="text-4xl font-bold text-white md:text-6xl">Oliver Boorstein</h2>
					<p class="mb-4 text-sm font-medium text-gray-500 italic md:text-base">
						/Ol-ih-ver Bore-steen/
					</p>
					<p class="mb-6 text-lg font-medium text-gray-300 md:text-xl">
						Researcher and Computer Science Student <br />
						@ University of Oregon
					</p>
					<div class="flex gap-4">
						<a
							href="/Oliver_Boorstein_Resume.pdf"
							target="_blank"
							class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
						>
							📄 View Resume
						</a>
						<button
							onclick={copyEmailToClipboard}
							class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium shadow-lg transition-colors duration-200 hover:cursor-pointer hover:bg-gray-200 hover:shadow-xl"
						>
							📧 Contact Me
						</button>
					</div>

					<!-- Email copied popup -->
					{#if showCopiedMessage}
						<div
							in:fade={{ duration: 200 }}
							out:fade={{ duration: 500 }}
							class="absolute z-10 mt-2 ml-36 rounded-lg bg-green-600 p-3 text-white opacity-50 shadow-lg"
						>
							✅ Email copied to clipboard!
						</div>
					{/if}
				</div>
			</div>

			<!-- Skills Section -->
			<div class="mt-32 text-center">
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
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">The University of Oregon</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						4.25 GPA, Learning Assistant, Undergraduate Research, former Leet Club Vice President,
						current Album Listening Club Officer, and more. <br /> <br /> Between my academic success
						and my campus involvement, I've gotten a lot done at UO. With two more years to go, I'm not
						slowing down.
					</p>
				</div>

				<!-- Project 2 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">Undergraduate Research</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						Producing internal tools that allow members of the Oregon Network Research Group to
						analyze the massive amount of network traffic across the University of Oregon.
						<br />
						<br />
						Supported by a prestigious stipend from the National Science Foundation for research experiences
						for undergraduates.
					</p>
				</div>

				<!-- Project 3 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">
						<a
							href="https://thestoning.net"
							target="_blank"
							rel="noopener noreferrer"
							class="underline transition-colors hover:text-gray-200"
						>
							thestoning.net
						</a>
					</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						Music publication website for the Album Listening Club. Built as a team of 4 developers,
						with React. The publication hosts articles, reviews, and interviews all created by club
						members.
					</p>
				</div>

				<!-- Project 4 -->
				<div
					class="rounded-xl bg-gray-800 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">
						<a
							href="https://github.com/flamboh/netflow-analysis"
							target="_blank"
							rel="noopener noreferrer"
							class="underline transition-colors hover:text-gray-200"
						>
							NetFlow Analysis
						</a>
					</h3>
					<p class="text-lg leading-relaxed text-gray-300">
						Fullstack application built with SvelteKit and a SQLite database of over 100,000 rows
						maintained with a Python script. Enables researchers to analyze over 20 terabytes of
						NetFlow data across the University of Oregon.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Bottom line of o's animation -->
	<!-- {#if bottomReached}
		<div class="w-full pr-6 pb-32 pl-0 text-left">
			<span class="font-mono text-2xl font-medium text-gray-500 md:text-4xl">
				{'o'.repeat(bottomOCount)}
			</span>
		</div>
	{/if} -->
</main>
