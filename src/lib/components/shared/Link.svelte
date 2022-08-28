<script lang="ts">
	import clsx from 'clsx';

	export let href = '';
	export let label: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let isExternal = false;
	let className: string | undefined;

	export { className as class };
</script>

<a
	{href}
	aria-label={label}
	{title}
	class={clsx(
		'text-gray-400 hover:text-gray-100 no-underline hover:underline transition duration-200 ease-out hover:ease-in',
		className
	)}
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
>
	<slot />
</a>
