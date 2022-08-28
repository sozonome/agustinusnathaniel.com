import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		fs: true
	},
	plugins: [
		sveltekit(),
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
};

export default config;
