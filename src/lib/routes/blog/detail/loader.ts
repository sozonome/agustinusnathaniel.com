import { BASE_URL } from '$lib/constants/baseUrl';
import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';
import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';

import type { BlogPostDetailProps } from './types';

export const load: Load<LoadInput, LoadOutput<BlogPostDetailProps>> = async ({ params, fetch }) => {
	const blogPost = (await fetch(`/blog/data/${params.slug}`).then(async (res) =>
		res.json()
	)) as BlogPostDetailProps;

	return {
		props: {
			...blogPost
		},
		stuff: {
			seo: {
				title: `${blogPost.meta.title} | Agustinus Nathaniel`,
				openGraph: {
					images: [
						{
							url: buildOgImgUrl({
								heading: blogPost.meta.title,
								text: `${BASE_URL}/blog/${params.slug}`
							})
						}
					]
				}
			}
		},
		maxage: 60
	};
};
