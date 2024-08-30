// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
	const ingredient = params.slug;

	try {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
		);

		if (!response.ok) {
			throw error(response.status, `Failed to fetch meals for ingredient '${ingredient}'.`);
		}

		const data = await response.json();
		console.log('Fetched data:', data); // Debugging line

		// Ensure meals is an array of Meal
		const meals = Array.isArray(data.meals) ? data.meals : [];

		return {
			props: {
				meals,
				slug: ingredient
			}
		};
	} catch (err) {
		console.error('Error fetching meals:', err);
		throw error(500, `An error occurred while fetching meals for ingredient '${ingredient}'.`);
	}
}