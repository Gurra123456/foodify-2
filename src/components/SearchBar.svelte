<script>
	export let text;

	let visible = true;

	function toggleVissible() {
		visible = !visible;
	}

	function handleSearch() {
		console.log();
	}
</script>

{#if visible}
	<button
		on:click={toggleVissible}
		class=" bg-black text-white tracking-tight text-xl rounded-3xl w-48 h-12 hover:bg-orange-600"
		>{text}
	</button>
{:else}
	<form action="/search-result" class="flex w-full">
		<div class="flex w-full justify-center">
			<input
				class={visible
					? 'rounded-3xl outline-0 w-48 h-12 text-black bg-white'
					: 'ps-5 pe-14 text-lg rounded-3xl outline-0 w-5/6 h-12 text-black bg-white'}
				placeholder="Search for a recipe..."
				type="text"
				name="search"
			/>
		</div>
		<div class="absolute end-14">
			<button
				type="submit"
				class=" bg-black text-white tracking-tight text-xl rounded-3xl w-12 h-12 hover:bg-orange-600"
				><svg width="24" height="24" fill="none" aria-hidden="true" class="mx-auto"
					><path
						d="m19 19-3.5-3.5"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path><circle
						cx="11"
						cy="11"
						r="6"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></circle></svg
				>
			</button>
		</div>
	</form>
{/if}

<style>
	/* styles go here */
</style>
