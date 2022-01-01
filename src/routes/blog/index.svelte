<script context="module" lang="ts">
	export { load } from '$lib/routes/blog/loader';
</script>

<script lang="ts">
	import BlogPostList from '$lib/components/blog/list.svelte';
	import type { BlogPostListProps } from '$lib/routes/blog/types';

	export let blogPosts: BlogPostListProps['blogPosts'];
</script>

<h2 text="lg gray-500" mb-6>Blog Posts</h2>
<BlogPostList entries={blogPosts} />
