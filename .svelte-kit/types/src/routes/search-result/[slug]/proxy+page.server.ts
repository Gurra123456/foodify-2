// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const ingredient = params.slug;

	const fetchMeals = async () => {
		const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
		if (!res.ok) {
			throw new Error('Failed to fetch meals');
		}
		const data = await res.json();
		console.log('Fetched data:', data); // Debugging line
		return data;
	};

	// Await the fetchMeals promise to get the actual data
	const data = await fetchMeals();

	return {
		meals: data.meals || [], // Ensure meals is always an array
		slug: ingredient
	};
};
