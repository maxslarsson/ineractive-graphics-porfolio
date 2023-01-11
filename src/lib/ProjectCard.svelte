<script>
	export let title;
	export let description;
	export let href;
	export let github;
	export let tech;

	import folderIcon from '$lib/assets/folder.svg';
	import githubIcon from '$lib/assets/github.svg';
</script>

<a {href} class="p-4 md:w-1/2 md" style="max-width: 544px">
	<div
		class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
	>
		<div class="p-6">
			<div class="flex flex-row justify-between items-center">
				<div class="my-2">
					<img src={folderIcon} class="text-indigo-800" />
				</div>
				<div class="flex flex-row justify-between">
					<div class="mx-1">
						<a
							class="text-sm text-gray-500 transition hover:text-gray-600"
							target="_blank"
							rel="noopener noreferrer"
							href={github}
						>
							<span class="sr-only">github</span>
							<img class="w-6 h-6" src={githubIcon} />
						</a>
					</div>
				</div>
			</div>
			<h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">{title}</h2>
			<p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
			<div class="flex flex-row justify-between">
				<div class="text-gray-400 text-sm font-extralight">{tech.join(' • ')}</div>
			</div>
		</div>
	</div>
</a>
