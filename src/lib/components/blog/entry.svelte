<script lang="ts">
	import type { BlogPostEntry } from '$lib/services/notion/blog/entries/types';

	export let entry: BlogPostEntry;
	let className: string | undefined;
	export { className as class };

	const { title, publishedDate, slug } = entry;
</script>

<a
	href={`/blog/${slug}`}
	no-underline
	sveltekit:prefetch
	flex
	items-center
	gap-6
	cursor-pointer
	text="gray-400 hover:gray-100"
	transition
	duration-200
	ease-out
	hover:ease-in
	class={className}
>
	<div mb-4>
		<h3 text="xl sm:2xl" mb-2>{title}</h3>
		<p text="sm zinc-400" m-0>{publishedDate}</p>
	</div>
</a>
