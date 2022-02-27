<script lang="ts">
	import BlogEntry from './entry.svelte';

	import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

	export let entries: BlogPostEntries;
	export let entryClass: string | undefined = undefined;
</script>

{#each entries as entry}
	<BlogEntry {entry} class={entryClass} />
{/each}
