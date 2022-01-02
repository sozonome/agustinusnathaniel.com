import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';

import type { HomeProps } from './types';

import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

export const load: Load<LoadInput, LoadOutput<HomeProps>> = async ({ fetch }) => {
	const maxRecent = 2;
	const recentBlogPosts = (
		(await fetch('/posts').then(async (res) => await res.json())) as BlogPostEntries
	).slice(0, maxRecent);

	return {
		props: {
			blogPosts: recentBlogPosts
		},
		maxage: 60
	};
};
