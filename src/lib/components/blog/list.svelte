<script lang="ts">
	import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';
	import BlogEntry from './entry.svelte';

	export let entries: BlogPostEntries;
</script>

{#each entries as entry}
	<BlogEntry {entry} />
{/each}
