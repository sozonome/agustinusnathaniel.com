import type { MdBlock } from 'notion-to-md/build/types';

import { notion } from '$lib/services/notion/client';
import { n2m } from '$lib/services/notion/middleware';

export const getBlocks = async (blockId: string): Promise<MdBlock[]> => {
	const { results } = await notion.blocks.children.list({
		block_id: blockId,
		page_size: 50
	});

	return await n2m.blocksToMarkdown(results);
};
