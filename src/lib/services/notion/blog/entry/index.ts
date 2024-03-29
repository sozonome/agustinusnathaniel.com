import { getDatabase } from '$lib/services/notion/base/database';
import { getPage, getPageMarkdown } from '$lib/services/notion/base/page';
import { BLOG_DATABASE_ID } from '$lib/services/notion/constants';
import type {
	DatabaseEntry,
	PropertyValueDate,
	PropertyValueRichText,
	PropertyValueTitle
} from '$lib/services/notion/types';
import { dateFormatLong } from '$lib/utils/formatDate';

import type { BlogPostDetail } from './types';

export const getBlogPostDetail = async (slug: string): Promise<BlogPostDetail> => {
	const blogPosts = await getDatabase(BLOG_DATABASE_ID);
	const selectedPost = blogPosts.find(
		(post) => (post.properties.slug as PropertyValueRichText).rich_text[0].plain_text === slug
	);

	if (!selectedPost) {
		return {};
	}

	const pageData = (await getPage(selectedPost.id)) as DatabaseEntry;
	const title = (pageData.properties.title as PropertyValueTitle).title[0].plain_text;
	const publishedDate = dateFormatLong(
		(pageData.properties.published_at as PropertyValueDate).date?.start ?? ''
	);

	const content = await getPageMarkdown(selectedPost.id);

	return {
		meta: {
			title,
			publishedDate
		},
		content
	};
};
