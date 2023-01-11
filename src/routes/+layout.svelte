<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<main class="w-full px-6 pb-12 antialiased bg-white">
	<div class="mx-auto max-w-8xl">
		<Navbar />
		<slot />
	</div>
</main>
