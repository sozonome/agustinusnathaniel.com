<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/normalize.css';
	import '@fontsource/outfit/latin.css';
	import '$lib/styles/app.css';
	import Layout from '$lib/components/layout/index.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Layout path={data.path}>
	<slot />
</Layout>
