import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';

import type { BlogPostEntries } from '$lib/services/notion/blog/entries/types';

import type { BlogPostListProps } from './types';
import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';
import { BASE_URL } from '$lib/constants/baseUrl';

export const load: Load<LoadInput, LoadOutput<BlogPostListProps>> = async ({ fetch }) => {
	const blogPosts = (await fetch('/posts').then(
		async (res) => await res.json()
	)) as BlogPostEntries;

	return {
		props: {
			blogPosts
		},
		stuff: {
			seo: {
				title: 'Blog Post',
				openGraph: {
					images: [{ url: buildOgImgUrl({ heading: 'Blog Post', text: `${BASE_URL}/blog` }) }]
				}
			}
		},
		maxage: 60
	};
};
