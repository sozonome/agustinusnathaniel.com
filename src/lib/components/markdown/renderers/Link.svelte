<script lang="ts">
	export let href = '';
	export let title: string | undefined = undefined;
</script>

<a text-gray-300 fw-light {href} {title}><slot /></a>
