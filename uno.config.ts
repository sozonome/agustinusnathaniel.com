import extractorSvelte from '@unocss/extractor-svelte';
import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
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
});
