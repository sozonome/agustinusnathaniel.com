<script context="module" lang="ts">
	export { load } from '$lib/routes/home/loader';
</script>

<script lang="ts">
	import type {
		PropertyValueDate,
		PropertyValueRichText,
		PropertyValueTitle
	} from '@notion-stuff/v4-types';
	import type { HomeProps } from '$lib/routes/home/types';
	import { dateFormatLong } from '$lib/utils/formatDate';

	export let blogPosts: HomeProps['blogPosts'];

	const convertedBlogPosts = blogPosts.map((post) => {
		const title = (post.properties.title as PropertyValueTitle).title[0].plain_text;
		const slug = (post.properties.slug as PropertyValueRichText).rich_text[0].plain_text;
		const publishedDate = dateFormatLong(
			(post.properties.published_at as PropertyValueDate).date?.start
		);

		return {
			title,
			slug,
			publishedDate
		};
	});
</script>

<h1 text="teal-900">Welcome to SvelteKit</h1>
<p text="teal-700">
	Visit <a no-underline hover="underline" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
	documentation
</p>

{#each convertedBlogPosts as blogPost}
	<h2>{blogPost.title}</h2>
{/each}
