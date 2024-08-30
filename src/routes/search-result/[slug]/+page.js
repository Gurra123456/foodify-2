/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		post: {
			title: `Results for ${params.slug}`,
			content: `Content for ${params.slug} goes here`
		}
	};
}
