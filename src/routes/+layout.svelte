<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/normalize.css';
	import '@fontsource/outfit/latin.css';
	import '$lib/styles/app.css';
	import type { LayoutData } from './$types';

	import Layout from '$lib/components/layout/index.svelte';

	export let data: LayoutData;
</script>

<Layout path={data.path}>
	<slot />
</Layout>
