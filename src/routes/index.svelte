<script context="module" lang="ts">
	export { load } from '$lib/routes/home/loader';
</script>

<script lang="ts">
	import BlogPostList from '$lib/components/blog/list.svelte';
	import type { HomeProps } from '$lib/routes/home/types';

	export let blogPosts: HomeProps['blogPosts'];
</script>

<h2 text="lg gray-500" mb-6>Recent Posts</h2>

<BlogPostList entries={blogPosts} />

<div mt-8>
	<a href="/blog" btn bg-orange-200>See All Posts</a>
</div>
