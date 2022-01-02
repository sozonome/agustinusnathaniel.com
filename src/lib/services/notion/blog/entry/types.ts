export type BlogEntryMeta = {
	title: string;
	publishedDate: string;
};

export type BlogPostDetail = {
	meta?: BlogEntryMeta;
	content?: string;
};
