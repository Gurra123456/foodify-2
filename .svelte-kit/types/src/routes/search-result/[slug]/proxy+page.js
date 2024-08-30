// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {
	return {
		post: {
			title: `Results for ${params.slug}`,
			content: `Content for ${params.slug} goes here`
		}
	};
}
