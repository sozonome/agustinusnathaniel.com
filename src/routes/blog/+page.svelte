<script lang="ts">
	import type { PageData } from './$types';

	import BlogPostList from '$lib/components/blog/list.svelte';

	export let data: PageData;
</script>

<h2 class="text-lg text-gray-500 mb-6">Blog Posts</h2>
<BlogPostList entries={data.blogPosts} />
