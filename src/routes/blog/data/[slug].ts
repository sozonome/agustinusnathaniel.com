import { getBlogPostDetail } from '$lib/services/notion/blog/entry';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { meta, content } = await getBlogPostDetail(params.slug);

	if (!meta || !content) {
		return;
	}

	return {
		body: {
			meta,
			content
		}
	};
};
