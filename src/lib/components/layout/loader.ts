import type { Load } from '@sveltejs/kit';

export const load: Load<Record<string, string>, { path?: string }> = async ({ url }) => {
	return {
		props: {
			path: url.pathname
		}
	};
};
