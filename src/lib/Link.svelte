<script>
	export let href;

	import { base } from '$app/paths';
</script>

<a {...$$props} href="{base}{href}">
	<slot />
</a>
