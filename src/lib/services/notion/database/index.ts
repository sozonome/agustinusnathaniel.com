import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import { notion } from '$lib/services/notion/client';

export const getDatabase = async (
	databaseId: string
): Promise<QueryDatabaseResponse['results']> => {
	const response = await notion.databases.query({
		database_id: databaseId
	});
	return response.results;
};
