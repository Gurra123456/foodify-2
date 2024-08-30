<script>
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data;
    
	/**
	 * @type {string | any[]}
	 */
	export let meals = [];
	export let slug;

	// Debugging: Log the slug and meals values
	console.log('Slug in component:', slug);
	console.log('Meals data:', meals);
	console.log('Data:', data.post.title);
</script>

<h1>{data.post.title}</h1>

{#if meals.length}
	<ul>
		{#each meals as meal}
			<li>
				<h2>{meal.strMeal}</h2>
				<img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
			</li>
		{/each}
	</ul>
{:else}
	<p>No meals found for this ingredient.</p>
{/if}
