import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';

import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

import type { BlogPostListProps } from './types';

export const load: Load<LoadInput, LoadOutput<BlogPostListProps>> = async ({ fetch }) => {
	const blogPosts = (await fetch('/posts').then(
		async (res) => await res.json()
	)) as BlogPostEntries;

	return {
		props: {
			blogPosts
		},
		stuff: {
			seo: {
				title: 'Blog Post'
			}
		},
		maxage: 60
	};
};
