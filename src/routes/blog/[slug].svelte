<script context="module" lang="ts">
	export { load } from '$lib/routes/blog/detail/loader';
</script>

<script lang="ts">
	import type { BlogEntryMeta } from '$lib/services/notion/blog/entry/types';
	import MdRenderer from '$lib/components/markdown/MdRenderer.svelte';

	export let meta: BlogEntryMeta;
	export let content: string;
</script>

<div mb-12>
	<h2 text="3xl">{meta.title}</h2>
	<p>{meta.publishedDate}</p>
</div>

<MdRenderer source={content} />
