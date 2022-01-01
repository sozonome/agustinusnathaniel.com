import type { Load, LoadOutput } from '@sveltejs/kit';

import { sortBlogPosts } from '$lib/services/notion/utils/sortBlogPosts';
import type { HomeProps } from './types';
import type { NotionDatabaseEntries } from '$lib/services/notion/types';

export const load: Load<unknown, LoadOutput<HomeProps>> = async ({ fetch }) => {
	const maxRecent = 3;
	const recentBlogPosts = sortBlogPosts(
		(await fetch('/blogs').then(async (res) => await res.json())) as NotionDatabaseEntries
	).slice(0, maxRecent);

	return {
		props: {
			blogPosts: recentBlogPosts
		}
	};
};
