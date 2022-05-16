import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import UnoCss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import { presetAttributify, presetIcons, presetUno } from 'unocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				UnoCss({
					extractors: [extractorSvelte],
					shortcuts: [
						{
							btn: 'cursor-pointer no-underline border-none w-full p-4 text-sm rounded-2xl font-sans fw-medium',
							layout: 'max-w-600px mx-auto p-4'
						}
					],
					theme: {
						fontFamily: {
							sans: 'Outfit'
						}
					},
					presets: [
						presetAttributify(),
						presetUno(),
						presetIcons({
							extraProperties: {
								display: 'inline-block',
								'vertical-align': 'middle'
							}
						})
					]
				})
			]
		}
	}
};

export default config;
