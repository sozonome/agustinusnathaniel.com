import type {
	PropertyValueDate,
	PropertyValueRichText,
	PropertyValueTitle
} from '@notion-stuff/v4-types';

import { getDatabase } from '$lib/services/notion/base/database';
import { sortBlogPosts } from '$lib/services/notion/blog/utils';
import { BLOG_DATABASE_ID } from '$lib/services/notion/constants';
import { dateFormatLong } from '$lib/utils/formatDate';

import type { BlogPostEntries } from './types';

export const getBlogEntries = async (): Promise<BlogPostEntries> => {
	const blogPosts = await getDatabase(BLOG_DATABASE_ID);
	const sorted = sortBlogPosts(blogPosts);

	return sorted.map((post) => {
		const title = (post.properties.title as PropertyValueTitle).title[0].plain_text;
		const slug = (post.properties.slug as PropertyValueRichText).rich_text[0].plain_text;
		const publishedDate = dateFormatLong(
			(post.properties.published_at as PropertyValueDate).date?.start
		);

		return {
			title,
			slug,
			publishedDate
		};
	});
};
