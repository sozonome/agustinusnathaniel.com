<script lang="ts">
	import Link from '$lib/components/shared/Link.svelte';

	let linkClass = 'text-3xl text-gray-500';
</script>

<footer layout w-full pb-8 text="sm sm:base" mb-8 self-end grid gap-2>
	<section flex gap-2>
		<Link class={linkClass} isExternal href="https://www.instagram.com/agustinusnathaniel">
			<div class="i-fa-brands-instagram" />
		</Link>
		<Link class={linkClass} isExternal href="https://twitter.com/sozonome">
			<div class="i-fa-brands-twitter" />
		</Link>
		<Link class={linkClass} isExternal href="https://youtube.com/agustinusnathaniel">
			<div class="i-fa-brands-youtube" />
		</Link>
		<Link class={linkClass} isExternal href="https://linkedin.com/in/agustinusnathaniel">
			<div class="i-fa-brands-linkedin" />
		</Link>
	</section>

	<section>
		{new Date().getFullYear()} |
		<a
			href="https://sznm.dev"
			no-underline
			fw-medium
			hover:underline
			target="_blank"
			rel="external noopener noreferrer"
			text-orange
		>
			sznm.dev
		</a>
	</section>
</footer>
