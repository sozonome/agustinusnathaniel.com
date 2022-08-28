<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

	import type { BlogPostListProps } from '$lib/routes/blog/list/types';
	import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';
	import { BASE_URL } from '$lib/constants/baseUrl';

	export const load: Load<Record<string, string>, BlogPostListProps> = async ({ fetch }) => {
		const blogPosts = (await fetch('/posts').then(
			async (res) => await res.json()
		)) as BlogPostEntries;

		return {
			props: {
				blogPosts
			},
			stuff: {
				seo: {
					title: 'Blog Post',
					openGraph: {
						images: [{ url: buildOgImgUrl({ heading: 'Blog Post', text: `${BASE_URL}/blog` }) }]
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
	import BlogPostList from '$lib/components/blog/list.svelte';
	// import type { BlogPostListProps } from '$lib/routes/blog/list/types';

	export let blogPosts: BlogPostListProps['blogPosts'];
</script>

<h2 class="text-lg text-gray-500 mb-6">Blog Posts</h2>
<BlogPostList entries={blogPosts} />
