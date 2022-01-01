import type { MdBlock } from 'notion-to-md/build/types';

import { n2m } from '$lib/services/notion/middleware';

export const getPage = async (pageId: string): Promise<MdBlock[]> => n2m.pageToMarkdown(pageId);
