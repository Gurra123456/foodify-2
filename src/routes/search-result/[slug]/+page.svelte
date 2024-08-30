<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ meals, slug } = data);

	console.log('meals:', data);
</script>

<h1>Results for {slug}</h1>

{#each meals as meal}
	<ul>
		<li>
			<h1>{meal.strMeal}</h1>
			<h2>{meal.strMealThumb}</h2>
		</li>
	</ul>
{/each}
