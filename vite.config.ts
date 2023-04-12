import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [sveltekit(), UnoCss()]
});

export default config;
