import pickBy from 'lodash-es/pickBy.js';

import type { OgImageOption } from '$lib/types/ogImageOption';

const OG_IMG_BASE_URL = 'https://og-img.sznm.dev';

export const buildOgImgUrl = (options: OgImageOption): string => {
	const purgedOptions = pickBy(options);
	const urlParams = new URLSearchParams(purgedOptions).toString();
	const params = urlParams ? `?${urlParams}` : '';

	return `${OG_IMG_BASE_URL}/api/generate${params}`;
};
