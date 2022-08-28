import type { PageLoad } from './$types';

import { BASE_URL } from '$lib/constants/baseUrl';
import { buildOgImgUrl } from '$lib/utils/buildOgImgUrl';

import type { BlogPostDetailProps } from '$lib/routes/blog/detail/types';

export const load: PageLoad = async ({ params, fetch, setHeaders }) => {
	const blogPost = (await fetch(`/blog/data/${params.slug}`).then(async (res) =>
		res.json()
	)) as BlogPostDetailProps;

	setHeaders({
		'cache-control': 'public, max-age=60'
	});
	return {
		...blogPost,
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
	};
};