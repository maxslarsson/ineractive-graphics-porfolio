<script>
	import AuthorCard from '$lib/AuthorCard.svelte';
</script>

<div class="dark:bg-gray-900 mt-6">
	<div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
		<div class="md:w-1/3 p-2 md:flex md:justify-center">
			<AuthorCard />
		</div>
		<div class="md:w-2/3 px-8">
			<div class="mb-6">
				<h2 class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200">
					👋 Hello there!
				</h2>
				<p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
					My name is Max Larsson and I'm a student curretly living in NYC. This section will be
					filled out later with information about me, what I like to do, and my skills :)
				</p>
			</div>
		</div>
	</div>
</div>
