<script>
	export let href;

	import { base } from '$app/paths';
</script>

<a href="{base}{href}">
	<slot />
</a>
