import type { RequestHandler } from '@sveltejs/kit';

import { getBlogEntries } from '$lib/services/notion/blog/entries';

export const get: RequestHandler = async () => {
	const blogEntries = await getBlogEntries();

	return {
		body: blogEntries
	};
};
