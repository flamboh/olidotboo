<script>
	import profile from '$lib/assets/profile.jpg';
</script>

<main class="bg-jungle min-h-screen">
	<!-- Hero Section -->
	<section class="flex min-h-screen items-center justify-center px-6">
		<div class="text-center">
			<h2 class="text-moss mb-4 text-2xl font-medium md:text-4xl">
				Hi, I'm Oliver. Welcome to oli.boo
			</h2>
			<h1 class="mb-4 text-4xl font-bold text-white md:text-6xl">
				Building and learning, but always <br />
				🔉 tuned in 🎧
			</h1>
			<p class="text-mint mx-auto max-w-2xl text-xl font-medium md:text-2xl">
				Researcher and Computer Science Student <br />
				@ University of Oregon
			</p>
		</div>
	</section>

	<!-- About Section -->
	<section class="bg-jungle flex min-h-screen items-center justify-center px-6 py-16">
		<div class="mx-auto flex max-w-6xl items-center gap-12">
			<div class="flex-shrink-0">
				<img
					src={profile}
					alt="Oliver Boorstein"
					class="border-jungle h-80 w-64 scale-125 rounded-2xl border-4 object-cover object-top shadow-xl"
				/>
			</div>
			<div class="flex-1">
				<h2 class="mb-2 text-4xl font-bold text-white md:text-6xl">Oliver Boorstein</h2>
				<p class="text-moss mb-8 text-sm font-medium italic md:text-base">/Ol-ih-ver Bore-steen/</p>
				<div class="text-mint space-y-6 text-lg leading-relaxed font-medium md:text-xl">
					<p></p>
				</div>
			</div>
		</div>
	</section>
</main>
