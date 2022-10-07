<script lang="ts">
	import type { PageData } from './$types';

	import MdRenderer from '$lib/components/markdown/MdRenderer.svelte';

	export let data: PageData;
</script>

<div class="mb-12">
	<h2 class="text-3xl">{data.meta.title}</h2>
	<p>{data.meta.publishedDate}</p>
</div>

<MdRenderer source={data.content} />
