import type { RequestHandler } from './$types';

import { getBlogEntries } from '$lib/services/notion/blog/entries';
import { defaultHeaders } from '$lib/constants/api';

export const GET: RequestHandler = async () => {
	const blogEntries = await getBlogEntries();
	console.log({ blogEntries });

	return new Response(JSON.stringify(blogEntries), {
		headers: defaultHeaders
	});
};
