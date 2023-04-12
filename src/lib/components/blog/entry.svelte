<script lang="ts">
	import clsx from 'clsx';

	import type { BlogPostEntry } from '$lib/services/notion/blog/entries/types';

	export let entry: BlogPostEntry;
	let className: string | undefined;
	export { className as class };

	const { title, publishedDate, slug } = entry;
</script>

<a
	href={`/blog/${slug}`}
	class={clsx(
		'no-underline flex items-center gap-6 cursor-pointer text-gray-400 hover:text-gray-100 transition duration-200 ease-out hover:ease-in',
		className
	)}
	data-sveltekit-preload-data
>
	<div class="mb-4">
		<h3 class="text-xl sm:text-2xl mb-2">{title}</h3>
		<p class="text-sm text-zinc-400 m-0">{publishedDate}</p>
	</div>
</a>
