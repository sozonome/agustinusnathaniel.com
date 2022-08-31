<script lang="ts">
	import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags';

	import { page } from '$app/stores';
	import { BASE_URL } from '$lib/constants/baseUrl';
	import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';

	let seo: MetaTagsProps | undefined;

	page.subscribe((val) => {
		seo = val.data.seo;
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
	canonical={BASE_URL}
	openGraph={{
		url: BASE_URL,
		title: 'Agustinus Nathaniel',
		description: "Agustinus Nathaniel's personal site",
		site_name: 'agustinusnathaniel',
		images: [
			{
				url: buildOgImgUrl({ heading: 'Agustinus Nathaniel', text: BASE_URL })
			}
		],
		...seo?.openGraph
	}}
	twitter={seo?.twitter ?? {
		handle: '@sozonome',
		site: 'https://sznm.dev',
		cardType: 'summary_large_image'
	}}
/>
