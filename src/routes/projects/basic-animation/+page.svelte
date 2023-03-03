<script>
    import Link from '$lib/Link.svelte';
    import arrowLeftIcon from '$lib/assets/arrow-left.svg';
    import screenRecording from "./screen_recording.mp4";
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
            BASIC Animation
        </h2>
    </div>
    <div class="relative mb-auto">
        <video playsinline autoplay muted loop>
            <source src={screenRecording} type="video/mp4">
        </video>
        <br>
        <p>Use the arrow keys to adjust the wizard's wand, and press space to shoot!</p>
        <br>
        <p>I unfortunately didn't have enough time to implement all the additional features I wanted with college work, but I think it's still a pretty cool wizard animation :)</p>
    </div>
</div>
