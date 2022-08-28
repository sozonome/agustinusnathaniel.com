<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import Link from '$lib/components/shared/Link.svelte';
</script>

<div class="grid">
	<Hero />

	<div class="mt-8">
		<Link
			href="/blog"
			class="btn p-2 bg-orange-800 hover:bg-orange-600 text-gray-400 bg-opacity-40"
		>
			Thoughts
		</Link>
	</div>
</div>
