<script lang="ts">
	import BaseHeading from './BaseHeading.svelte';
	import Link from './Link.svelte';

	export let depth: number;
	export let raw: string;
	export let text: string;

	const id = text
		.toLowerCase()
		.trim()
		// remove html tags
		.replace(/<[!/a-z].*?>/gi, '')
		// remove unwanted chars
		.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
		.replace(/\s/g, '-');
</script>

<Link href={`#${id}`}>
	<BaseHeading {id} {depth} {raw}>
		<slot />
	</BaseHeading>
</Link>
