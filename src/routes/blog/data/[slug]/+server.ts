import { defaultHeaders } from '$lib/constants/api';
import { getBlogPostDetail } from '$lib/services/notion/blog/entry';
import type { RequestHandler } from './$types';

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
