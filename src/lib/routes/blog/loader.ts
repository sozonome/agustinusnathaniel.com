import type { Load, LoadOutput } from '@sveltejs/kit';

import type { BlogPostListProps } from './types';

import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

export const load: Load<unknown, LoadOutput<BlogPostListProps>> = async ({ fetch }) => {
	const blogPosts = (await fetch('/posts').then(
		async (res) => await res.json()
	)) as BlogPostEntries;

	return {
		props: {
			blogPosts
		}
	};
};
