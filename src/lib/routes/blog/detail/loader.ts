import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';

import type { BlogPostDetailProps } from './types';

export const load: Load<LoadInput, LoadOutput<BlogPostDetailProps>> = async ({ params, fetch }) => {
	const blogPost = (await fetch(`/blog/data/${params.slug}`).then(async (res) =>
		res.json()
	)) as BlogPostDetailProps;

	return {
		props: {
			...blogPost
		},
		maxage: 60
	};
};
