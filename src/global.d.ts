/// <reference types="@sveltejs/kit" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_NOTION_TOKEN: string;
	readonly VITE_BLOG_DATABASE_ID: string;
}
