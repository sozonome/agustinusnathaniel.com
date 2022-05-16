import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export type DatabaseEntry = Extract<QueryDatabaseResponse['results'][number], { url: string }>;

export type NotionDatabaseEntries = Array<DatabaseEntry>;
