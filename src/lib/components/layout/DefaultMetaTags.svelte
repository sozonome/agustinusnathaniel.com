<script lang="ts">
	import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags';

	import { BASE_URL } from '$lib/constants/baseUrl';
	import { UMAMI_SRC } from '$lib/constants/env';
	import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';

	import { page } from '$app/stores';

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
		src={UMAMI_SRC}
		data-domains="agustinusnathaniel.com"
	></script>
</svelte:head>

<MetaTags
	title={seo?.title ?? 'Hi! | Agustinus Nathaniel'}
	description={seo?.description ?? "Agustinus Nathaniel's personal site"}
	canonical={BASE_URL}
	openGraph={{
		url: BASE_URL,
		title: 'Agustinus Nathaniel',
		description: "Agustinus Nathaniel's personal site",
		siteName: 'agustinusnathaniel',
		images: [
			{
				url: buildOgImgUrl({ heading: 'Agustinus Nathaniel', text: BASE_URL })
			}
		],
		...seo?.openGraph
	}}
	twitter={seo?.twitter ?? {
		creator: '@sozonome',
		site: 'https://sznm.dev',
		cardType: 'summary_large_image'
	}}
/>
