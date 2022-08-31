import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import type { MdBlock } from 'notion-to-md/build/types';

import { notion } from '$lib/services/notion/client';
import { n2m } from '$lib/services/notion/middleware';

const getPageBlocks = async (pageId: string): Promise<MdBlock[]> => n2m.pageToMarkdown(pageId);

export const getPageMarkdown = async (pageId: string): Promise<string> => {
	const pageMdBlocks = await getPageBlocks(pageId);
	return n2m.toMarkdownString(pageMdBlocks);
};

export const getPage = async (pageId: string): Promise<GetPageResponse> =>
	notion.pages.retrieve({ page_id: pageId });
