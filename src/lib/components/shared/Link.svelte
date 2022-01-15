<script lang="ts">
	import clsx from 'clsx';

	export let href = '';
	export let title: string | undefined = undefined;
	export let isExternal: boolean | undefined;
	let className: string | undefined;

	export { className as class };
</script>

<a
	{href}
	{title}
	class={clsx('text-gray-400 hover:text-gray-100 no-underline hover:underline', className)}
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
	transition
	duration-200
	ease-out
	hover:ease-in
>
	<slot />
</a>
