<script>
	export let depth;
	export let raw;
	export let id;
</script>

{#if depth === 1}
	<h1 {id}><slot /></h1>
{:else if depth === 2}
	<h2 {id}><slot /></h2>
{:else if depth === 3}
	<h3 {id}><slot /></h3>
{:else if depth === 4}
	<h4 {id}><slot /></h4>
{:else if depth === 5}
	<h5 {id}><slot /></h5>
{:else if depth === 6}
	<h6 {id}><slot /></h6>
{:else}
	{raw}
{/if}
