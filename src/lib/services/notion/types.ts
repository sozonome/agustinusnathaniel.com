import type {
	QueryDatabaseResponse,
	PageObjectResponse,
	GetDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';

export type DatabaseEntry = Extract<QueryDatabaseResponse['results'][number], { url: string }>;

export type NotionDatabaseEntries = Array<DatabaseEntry>;

export declare type PostResult = Extract<
	GetDatabaseResponse,
	{
		url: string;
	}
>;

export declare type GetPagePropertyResponse = PageObjectResponse['properties'][string];
export declare type PropertyValueType = GetPagePropertyResponse['type'];

export declare type ExtractedPropertyValue<TType extends PropertyValueType> = Extract<
	GetPagePropertyResponse,
	{
		type: TType;
	}
>;

export declare type PropertyValueTitle = ExtractedPropertyValue<'title'>;
export declare type PropertyValueDate = ExtractedPropertyValue<'date'>;
export declare type PropertyValueRichText = ExtractedPropertyValue<'rich_text'>;
export declare type PropertyValueNumber = ExtractedPropertyValue<'number'>;
export declare type PropertyValueUrl = ExtractedPropertyValue<'url'>;
