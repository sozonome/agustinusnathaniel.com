import type { RequestHandlerOutput } from '@sveltejs/kit';

export const defaultHeaders: RequestHandlerOutput['headers'] = {
	'Content-Type': 'application/json',
	'Cache-Control': 's-maxage=600, stale-while-revalidate=2678400'
};
