<script lang="ts">
	import { MetaTags, MetaTagsProps } from 'svelte-meta-tags';
	import { page } from '$app/stores';

	let seo: MetaTagsProps | undefined;

	page.subscribe((val) => {
		seo = val.stuff.seo;
	});
</script>

<svelte:head>
	<script
		async
		defer
		data-website-id="19cccead-2387-42db-8790-74308b122205"
		src="https://umami.sznm.dev/umami.js"
		data-domains="agustinusnathaniel.com"></script>
</svelte:head>

<MetaTags
	title={seo?.title ?? 'Hi! | Agustinus Nathaniel'}
	description={seo?.description ?? "Agustinus Nathaniel's personal site"}
	canonical="https://agustinusnathaniel.com"
	openGraph={seo?.openGraph ?? {
		url: 'https://agustinusnathaniel.com',
		title: 'Agustinus Nathaniel',
		description: "Agustinus Nathaniel's personal site",
		site_name: 'agustinusnathaniel'
	}}
	twitter={seo?.twitter ?? {
		handle: '@sozonome',
		site: 'https://sznm.dev',
		cardType: 'summary_large_image'
	}}
/>
