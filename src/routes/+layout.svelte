<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<div class="font-mono flex flex-col container mx-auto justify-items-center h-screen">
	<Header />
	<slot></slot>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.blue.200);
	}
</style>
