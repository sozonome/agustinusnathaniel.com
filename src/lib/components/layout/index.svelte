<script lang="ts">
	import DefaultMetaTags from './DefaultMetaTags.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div bg-zinc-900 text-gray-300 min-h-100vh>
	<DefaultMetaTags />
	<Header />

	<main layout py="8">
		<slot />
	</main>

	<Footer />
</div>
