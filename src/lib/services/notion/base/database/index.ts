import { notion } from '$lib/services/notion/client';
import type { NotionDatabaseEntries } from '$lib/services/notion/types';

export const getDatabase = async (databaseId: string): Promise<NotionDatabaseEntries> => {
	const response = await notion.databases.query({
		database_id: databaseId
	});
	return response.results as NotionDatabaseEntries;
};
