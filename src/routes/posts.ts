import type { RequestHandler } from '@sveltejs/kit';

import { getBlogEntries } from '$lib/services/notion/blog/entries';
import { defaultHeaders } from '$lib/constants/api';

export const get: RequestHandler = async () => {
	const blogEntries = await getBlogEntries();

	return {
		headers: defaultHeaders,
		body: blogEntries
	};
};
