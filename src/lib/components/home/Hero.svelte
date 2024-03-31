<script lang="ts">
	import Link from '$lib/components/shared/Link.svelte';
</script>

<section>
	<h2 class="mb-0 flex items-center gap-2">
		<div class="i-twemoji-waving-hand" />
		Hello There
	</h2>
	<p class="mt-2 text-gray-400">Hope you are having a nice day!</p>
</section>

<section>
	<Link href="https://sznm.dev" isExternal class="">
		<h3 class="mb-0">sznm.dev</h3>
		<p class="mt-1 text-sm">Me as dev</p>
	</Link>

	<Link href="https://wussh.sznm.dev/agustinusnathaniel" isExternal class="">
		<h3 class="mb-0">links</h3>
	</Link>
</section>
