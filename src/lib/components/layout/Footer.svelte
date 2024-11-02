<script lang="ts">
	import Link from '$lib/components/shared/Link.svelte';

	let linkClass = 'text-3xl text-gray-500';
</script>

<footer class="layout w-full pb-8 text-sm sm:text-base mb-8 self-end grid gap-2">
	<section class="flex gap-2">
		<Link
			class={linkClass}
			isExternal
			label="instagram"
			href="https://www.instagram.com/agustinusnathaniel"
		>
			<div class="i-fa-brands-instagram"></div>
		</Link>
		<Link class={linkClass} isExternal label="twitter" href="https://twitter.com/sozonome">
			<div class="i-fa-brands-twitter"></div>
		</Link>
		<Link
			class={linkClass}
			isExternal
			label="youtube"
			href="https://youtube.com/agustinusnathaniel"
		>
			<div class="i-fa-brands-youtube"></div>
		</Link>
		<Link
			class={linkClass}
			isExternal
			label="linkedin"
			href="https://linkedin.com/in/agustinusnathaniel"
		>
			<div class="i-fa-brands-linkedin"></div>
		</Link>
	</section>

	<section>
		{new Date().getFullYear()} |
		<a
			href="https://sznm.dev"
			class="no-underline fw-medium hover:underline text-orange"
			target="_blank"
			rel="external noopener noreferrer"
		>
			sznm.dev
		</a>
	</section>
</footer>
