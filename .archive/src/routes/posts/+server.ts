import { defaultHeaders } from '$lib/constants/api';
import { getBlogEntries } from '$lib/services/notion/blog/entries';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const blogEntries = await getBlogEntries();

	return new Response(JSON.stringify(blogEntries), {
		headers: defaultHeaders
	});
};
