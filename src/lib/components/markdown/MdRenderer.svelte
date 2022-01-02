<script lang="ts">
	import SvelteMarkdown, { Renderers } from 'svelte-markdown';
	import Blockquote from './renderers/Blockquote.svelte';
	import Heading from './renderers/Heading.svelte';
	import Hr from './renderers/Hr.svelte';
	import Image from './renderers/Image.svelte';
	import Link from './renderers/Link.svelte';
	import Paragraph from './renderers/Paragraph.svelte';

	export let source = '';

	const renderers: Partial<Renderers> = {
		blockquote: Blockquote,
		heading: Heading,
		hr: Hr,
		image: Image,
		link: Link,
		paragraph: Paragraph
	};
</script>

<SvelteMarkdown {source} {renderers} />
