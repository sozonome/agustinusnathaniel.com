<script lang="ts">
	export let href = '';
	export let title: string | undefined = undefined;
</script>

<a class="text-gray-300 fw-light" {href} {title}><slot /></a>
