<script lang="ts">
	import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

	import BlogEntry from './entry.svelte';

	export let entries: BlogPostEntries;
	export let entryClass: string | undefined = undefined;
</script>

{#each entries as entry}
	<BlogEntry {entry} class={entryClass} />
{/each}
