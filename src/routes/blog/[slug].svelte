<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	import { BASE_URL } from '$lib/constants/baseUrl';
	import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';

	import type { BlogPostDetailProps } from '$lib/routes/blog/detail/types';

	export const load: Load<{ slug: string }, BlogPostDetailProps> = async ({ params, fetch }) => {
		const blogPost = (await fetch(`/blog/data/${params.slug}`).then(async (res) =>
			res.json()
		)) as BlogPostDetailProps;

		return {
			props: {
				...blogPost
			},
			stuff: {
				seo: {
					title: `${blogPost.meta.title} | Agustinus Nathaniel`,
					openGraph: {
						images: [
							{
								url: buildOgImgUrl({
									heading: blogPost.meta.title,
									text: `${BASE_URL}/blog/${params.slug}`
								})
							}
						]
					}
				}
			},
			cache: {
				maxage: 60
			}
		};
	};
</script>

<script lang="ts">
	import type { BlogEntryMeta } from '$lib/services/notion/blog/entry/types';
	import MdRenderer from '$lib/components/markdown/MdRenderer.svelte';

	export let meta: BlogEntryMeta;
	export let content: string;
</script>

<div mb-12>
	<h2 text="3xl">{meta.title}</h2>
	<p>{meta.publishedDate}</p>
</div>

<MdRenderer source={content} />
