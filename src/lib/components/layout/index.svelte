<script lang="ts">
	import { blur } from 'svelte/transition';

	import DefaultMetaTags from './DefaultMetaTags.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	export let path = '';
</script>

<div font-sans bg-zinc-900 text-gray-300 min-h-100vh>
	<DefaultMetaTags />
	<Header />

	{#key path}
		<main
			in:blur={{ duration: 400, delay: 400, amount: 6 }}
			out:blur={{ duration: 400 }}
			layout
			py="8"
		>
			<slot />
		</main>
	{/key}

	<Footer />
</div>
