import { BASE_URL } from '$lib/constants/baseUrl';
import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';
import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, setHeaders }) => {
	const blogPosts = (await fetch('/posts').then(
		async (res) => await res.json()
	)) as BlogPostEntries;

	setHeaders({
		'cache-control': 'public, max-age=60'
	});
	return {
		blogPosts,
		seo: {
			title: 'Blog Post',
			openGraph: {
				images: [{ url: buildOgImgUrl({ heading: 'Blog Post', text: `${BASE_URL}/blog` }) }]
			}
		},
		cache: {
			maxage: 60
		}
	};
};
