<script lang="ts">
	import clsx from 'clsx';

	export let href = '';
	export let title: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };
</script>

<a class={clsx('text-gray-300 fw-light', className)} {href} {title}><slot /></a>
