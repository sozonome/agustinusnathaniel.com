<script lang="ts">
	import BlogEntry from './entry.svelte';

	import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

	export let entries: BlogPostEntries;
</script>

{#each entries as entry}
	<BlogEntry {entry} />
{/each}
