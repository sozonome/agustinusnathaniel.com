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
		data-website-id="32790ac3-8787-4a0f-98fb-fd5923e3d311"
		src="https://umami.sznm.dev/umami.js"></script>
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
