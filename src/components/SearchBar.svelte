<script>
	export let text;

	let visible = true;
	let searchQuery = '';

	function toggleVissible() {
		visible = !visible;
	}

	// Generate slug from the search query
	/**
	 * @param {string} query
	 */
	function generateSlug(query) {
		return query
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '_') // Replace spaces with underscores
			.replace(/[^a-z0-9_]+/g, ''); // Remove any other non-alphanumeric characters (excluding underscores)
	}

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	function handleSearch(event) {
		event.preventDefault();
		const slug = generateSlug(searchQuery);

		// Navigate to the search result page with the generated slug
		window.location.href = `/search-result/${slug}`;
	}
</script>

{#if visible}
	<button
		on:click={toggleVissible}
		class=" bg-black text-white tracking-tight text-xl rounded-3xl w-48 h-12 hover:bg-orange-600"
		>{text}</button
	>
{:else}
	<form on:submit={handleSearch} class="flex w-full">
		<div class="flex w-full justify-center">
			<input
				class="ps-5 pe-14 text-lg rounded-3xl w-48 outline-0 h-12 text-black bg-white overflow-hidden"
				placeholder="Search for a recipe..."
				type="text"
				name="search"
				id="search-input"
				bind:value={searchQuery}
			/>
			<button
				id="search-button"
				type="submit"
				class="-ms-12 bg-black text-white tracking-tight text-xl rounded-3xl w-12 h-12 hover:bg-orange-600"
			>
				<svg width="24" height="24" fill="none" aria-hidden="true" class="mx-auto">
					<path
						d="m19 19-3.5-3.5"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<circle
						cx="11"
						cy="11"
						r="6"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></circle>
				</svg>
			</button>
		</div>
	</form>
{/if}

<style>
	#search-input {
		animation: expand 0.3s forwards;
	}

	/* Keyframe animation to expand input width */
	@keyframes expand {
		from {
			width: 12rem;
		}
		to {
			width: 80%;
		}
	}
</style>
