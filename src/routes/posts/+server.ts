import type { RequestHandler } from './$types';

import { defaultHeaders } from '$lib/constants/api';
import { getBlogEntries } from '$lib/services/notion/blog/entries';

export const GET: RequestHandler = async () => {
	const blogEntries = await getBlogEntries();

	return new Response(JSON.stringify(blogEntries), {
		headers: defaultHeaders
	});
};
