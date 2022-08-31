import type { RequestHandler } from './$types';

import { defaultHeaders } from '$lib/constants/api';
import { getBlogPostDetail } from '$lib/services/notion/blog/entry';

export const GET: RequestHandler = async ({ params }) => {
	const { meta, content } = await getBlogPostDetail(params.slug);

	if (!meta || !content) {
		return new Response(JSON.stringify({}), {
			headers: defaultHeaders
		});
	}

	return new Response(JSON.stringify({ meta, content }), {
		headers: defaultHeaders
	});
};
