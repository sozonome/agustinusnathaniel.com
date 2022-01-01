<script lang="ts">
	import DefaultMetaTags from './DefaultMetaTags.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<DefaultMetaTags />
<Header />
<main layout px="4" py="8">
	<slot />
</main>
<Footer />
