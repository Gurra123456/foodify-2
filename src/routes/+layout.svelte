<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>


<div class="h-screen font-mono grid justify-items-center">
	<Header />
  <slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.blue.200);
	}
</style>