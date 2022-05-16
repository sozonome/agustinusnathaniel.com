import type { Load } from '@sveltejs/kit';

import { BASE_URL } from '$lib/constants/baseUrl';
import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';

import type { BlogPostDetailProps } from './types';

export const load: Load<{ slug: string }, BlogPostDetailProps> = async ({ params, fetch }) => {
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
		cache: {
			maxage: 60
		}
	};
};
