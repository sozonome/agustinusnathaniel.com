import { NotionToMarkdown } from 'notion-to-md';

import { notion } from './client';

export const n2m = new NotionToMarkdown({ notionClient: notion });
