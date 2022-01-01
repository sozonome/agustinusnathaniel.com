import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url }) => {
	return {
		props: {
			path: url.pathname
		}
	};
};
