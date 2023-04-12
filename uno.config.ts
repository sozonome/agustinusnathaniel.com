import extractorSvelte from '@unocss/extractor-svelte';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'unocss';

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
