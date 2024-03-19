import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [sveltekit(), UnoCss()],
	server: {
		open: true,
		port: 2208
	}
});

export default config;
