<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ meals, slug } = data);

	console.log('meals:', data);
</script>

<div class="flex flex-col place-items-center">
	<h1 class="text-5xl my-10">Results for {slug}</h1>
	<div class="">
		<ul role="list" class="my-16 mx-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
			{#each meals as meal}
				<a href="/" class="mb-10">
					<img class="rounded-xl" alt="Image for {meal.strMeal}" src={meal.strMealThumb} />
					<h2 class="text-xl text-center mt-1">{meal.strMeal}</h2>
				</a>
			{/each}
		</ul>
	</div>
</div>
