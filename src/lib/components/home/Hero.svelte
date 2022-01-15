<script lang="ts">
	import Link from '$lib/components/shared/Link.svelte';
</script>

<section>
	<h3 mb-0 class="flex items-center gap-2">
		<div class="i-twemoji-waving-hand" />
		Hello There
	</h3>
	<p mt-2 text="gray-500">Hope you are having a nice day!</p>
</section>

<section>
	<Link href="https://sznm.dev" isExternal>
		<h3 mb-0>sznm.dev</h3>
		<p mt-1 text-sm>Me as dev</p>
	</Link>

	<Link href="https://olamonde.me/agustinusnathaniel" isExternal>
		<h3 mb-0>links</h3>
	</Link>
</section>
