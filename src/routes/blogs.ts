import type { RequestHandler } from '@sveltejs/kit';

import { BLOG_DATABASE_ID } from '$lib/services/notion/constants';
import { getDatabase } from '$lib/services/notion/database';

export const get: RequestHandler = async () => {
	const blogPosts = await getDatabase(BLOG_DATABASE_ID);

	return {
		body: blogPosts
	};
};
