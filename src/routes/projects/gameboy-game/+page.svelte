<script>
    import Link from '$lib/Link.svelte';
    import arrowLeftIcon from '$lib/assets/arrow-left.svg';
</script>

<div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <Link href="/projects" class="flex flex-row gap-2 pt-4">
        <img src={arrowLeftIcon} />
        <p>Projects</p>
    </Link>
    <div class="pt-4 pb-8 space-y-2 md:space-y-5">
        <h2
                class="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14"
        >
            Gameboy Game
        </h2>
    </div>
    <div class="relative mb-auto">
        <iframe style="border: none;" allowfullscreen="" src="https://itch.io/embed-upload/7795587?color=333333" width="480" height="452">
            <Link href="https://maxslarsson.itch.io/hop-master">Play Hop Master on itch.io</Link>
        </iframe>
    </div>
</div>
