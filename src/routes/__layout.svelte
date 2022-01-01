<script context="module" lang="ts">
	export { load } from '$lib/components/layout/loader';
</script>

<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/normalize.css';
	import '@fontsource/outfit/latin.css';
	import '$lib/styles/app.css';
	import Layout from '$lib/components/layout/index.svelte';

	export let path = '';
	console.log('ho', { path });
</script>

<Layout {path}>
	<slot />
</Layout>
