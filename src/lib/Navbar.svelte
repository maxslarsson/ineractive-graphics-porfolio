<script>
	import { page } from '$app/stores';
	import Link from '$lib/Link.svelte';

	const navItems = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' },
		{ href: '/projects', text: 'Projects' }
	];
</script>

<nav class="md:max-w-6xl mx-auto sticky top-0 z-50">
	<div
		class="bg-white flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2"
	>
		<ul class="flex justify-center list-reset m-0 w-full md:w-auto">
			{#each navItems as navItem}
				<li>
					<!-- TODO: Add highlighting to active link -->
					<Link
						href={navItem.href}
						class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl {$page
							.url.pathname === navItem.href
							? 'text-indigo-600'
							: ''}"
					>
						{navItem.text}
					</Link>
				</li>
			{/each}
		</ul>
	</div>
</nav>
