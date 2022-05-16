import type { PropertyValueDate } from '@notion-stuff/v4-types';

import type { DatabaseEntry, NotionDatabaseEntries } from '$lib/services/notion/types';

export const sortBlogPosts = (blogPosts: NotionDatabaseEntries): NotionDatabaseEntries => {
	return blogPosts.sort((a, b) => {
		const aPublishedDate = new Date(
			((a as DatabaseEntry).properties.published_at as PropertyValueDate).date?.start ?? ''
		);
		const bPublishedDate = new Date(
			((b as DatabaseEntry).properties.published_at as PropertyValueDate).date?.start ?? ''
		);

		if (aPublishedDate > bPublishedDate) return -1;
		return 1;
	});
};
