<script lang="ts">
	export let href = '';
	export let title: string | undefined = undefined;
	export let text = '';
</script>

<img class="w-full rounded-xl" src={href} {title} alt={text} />
